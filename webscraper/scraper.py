from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
import time
from datetime import datetime


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


# Initialize driver
def intialize_scraper():
    # Opens the URL in the browser.

    # driver.get(URL)
    # while True:
    #     try:
    #         time.sleep(3)
    #         clickLoadMore()
    #     except NoSuchElementException:
    #         break

    # Scrape links
    # time.sleep(1)
    # eventLinks = scrapeLinks()

    # Switch to new window
    # time.sleep(2)
    # driver.get(eventLinks[0].get_attribute("href"))
    driver.get("https://ou.campuslabs.com/engage/event/10092010")
    scrapeData()


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
    return links


# Scrape data
def scrapeData():
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

    formatData(title, startDate, endDate, location, desc)


# Formats data into a JSON format.


def formatData(title, startDay, endDay, location, desc):
    jsonInfo = {}
    # Appending the title
    jsonInfo["title"] = title.split(" - ")[0]

    # Format the start and end dates.

    startDay = (((startDay.split(", "))[1]).split(" CDT")[0]).split(" at ")
    endDay = (((endDay.split(", "))[1]).split(" CDT")[0]).split(" at ")

    jsonInfo["startDate"] = startDay[0]
    jsonInfo["endDate"] = endDay[0]

    jsonInfo["startTime"] = startDay[1]
    jsonInfo["endTime"] = endDay[1]

    print(jsonInfo)
    for i in range(len(location)):
        print(str(i) + ". " + location[i])


intialize_scraper()
