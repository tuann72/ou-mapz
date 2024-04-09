from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait


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
    driver.get(URL)
    clickLoadMore()


# Select LOAD MORE btn
def clickLoadMore():
    WebDriverWait(driver, 10)
    loadMoreBtn = driver.find_element("xpath", "//button")
    loadMoreBtn.click()


def compileData():
    pass


intialize_browser()
