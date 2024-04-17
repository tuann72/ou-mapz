from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
import time


# Set up the options for the driver
options = Options()
options.add_experimental_option("detach", True)

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
    driver.get(URL)
    while True:
        try:
            time.sleep(3)
            clickLoadMore()
        except NoSuchElementException:
            break

    # Scrape links
    time.sleep(3)
    eventLinks = scrapeLinks()

    # Switch to new window
    time.sleep(2)
    driver.get(eventLinks[0])


# Opens a new tab.
def newTab():
    driver.execute_script("window.open('');")


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
    time.sleep(5)
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

    for link in links:
        print(link.get_attribute("href"))
    return links


# Formats data into a JSON format.


def compileData():
    pass


intialize_scraper()
