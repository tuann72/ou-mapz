from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
import time
import pprint
import json


# Set up the options for the driver
options = Options()
options.add_experimental_option("detach", True)
# options.add_argument("--headless")

# Set up the driver
driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()), options=options
)

# URL of link to scrape
URL = "https://ou.campuslabs.com/engage/events"
eventLinks = []
jsonEvents = []


# Initialize driver
def intialize_scraper():
    # Opens the URL in the browser.

    driver.get(URL)
    while True:
        try:
            time.sleep(2)
            clickLoadMore()
        except NoSuchElementException:
            break

    # Scrape links
    time.sleep(1)
    eventLinks = scrapeLinks()

    # for link in eventLinks:
    #     time.sleep(1)
    #     driver.get(link)
    #     jsonEvents.append(scrapeData(link))

    pprint.pprint(jsonEvents)

    # Switch to new window
    # time.sleep(2)
    # driver.get(eventLinks[0].get_attribute("href"))
    # driver.get("https://ou.campuslabs.com/engage/event/10116895")
    # scrapeData("https://ou.campuslabs.com/engage/event/10116895")


# Select LOAD MORE btn
def clickLoadMore():
    # Locates the Load More button.
    loadMoreBtn = driver.find_element(
        By.XPATH,
        "//button[@tabindex='0' and contains(@style, 'text-align: center;')]/div/div/span[text()='Load More']",
    )
    # Clicks the Load More button.
    loadMoreBtn.click()


# Select Show Past Events.
def clickShowPastEvents():
    # Waits for page to render.
    time.sleep(1)
    # Locates the Show Past Events button.
    showPastEvents = driver.find_element(
        By.XPATH,
        "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary' and @tabindex='0' and @type='button']/span[text()='Show Past Events']",
    )
    # Clicks the Show Past Events button.
    showPastEvents.click()


# Scrape for all web links.
def scrapeLinks():
    links = driver.find_elements(By.XPATH, "//a[@href]")

    # We pop the last two links because those links are no events.
    links.pop()
    links.pop()

    urls = []
    for link in links:
        urls.append(link.get_attribute("href"))

    return urls


# Scrape data
def scrapeData(link):
    title = driver.title
    infoList = driver.find_elements(
        By.XPATH, "//p[@style='margin: 2px 0px; white-space: normal;']"
    )
    startDate = infoList[0].text
    endDate = infoList[1].text

    location = []

    for i in range(2, len(infoList)):
        location.append(infoList[i].text)

    desc = driver.find_element(By.XPATH, "//div[@class='DescriptionText']/child::*[1]")
    desc = desc.text

    formatData(title, startDate, endDate, location, desc, link)


# Formats data into a JSON format.
def formatData(title, startDay, endDay, location, desc, link):
    jsonInfo = {}
    jsonInfo["title"] = ""
    jsonInfo["startDate"] = ""
    jsonInfo["endDate"] = ""
    jsonInfo["startTime"] = ""
    jsonInfo["endTime"] = ""
    jsonInfo["location"] = ""
    jsonInfo["address"] = ""
    jsonInfo["description"] = ""
    jsonInfo["link"] = ""

    # Appending the title
    jsonInfo["title"] = title.split(" - ")[0]

    # Format the start and end dates.

    startDay = (((startDay.split(", "))[1]).split(" CDT")[0]).split(" at ")
    endDay = (((endDay.split(", "))[1]).split(" CDT")[0]).split(" at ")

    # Set start and end date.

    jsonInfo["startDate"] = startDay[0]
    jsonInfo["endDate"] = endDay[0]

    # Set start and end time.

    jsonInfo["startTime"] = startDay[1]
    jsonInfo["endTime"] = endDay[1]

    # Sets location and address.

    if len(location) == 2:
        jsonInfo["location"] = location[0]
        jsonInfo["address"] = location[1]
    else:
        jsonInfo["location"] = location[0]

    # Set description.

    jsonInfo["description"] = desc

    # Set link.

    jsonInfo["link"] = link

    # jsonString = json.dumps(jsonInfo)
    return jsonInfo


intialize_scraper()
