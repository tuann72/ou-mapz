from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
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


# Initialize driver
def intialize_browser():
    # Opens the URL in the browser.
    driver.get(URL)

    clickLoadMore()


# Select LOAD MORE btn
def clickLoadMore():
    # Waits for page to render.
    time.sleep(5)
    # Locates the Load More button.
    loadMoreBtn = driver.find_element(
        By.XPATH,
        "//button[@tabindex='0' and contains(@style, 'text-align: center;')]/div/div/span[text()='Load More']",
    )
    # Clicks the Load More button.
    loadMoreBtn.click()


# Select Show Past Events
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


# Select Card


def clickEventCard():
    pass


# Return to event page


def returnToEventPage():
    pass


def compileData():
    pass


intialize_browser()
