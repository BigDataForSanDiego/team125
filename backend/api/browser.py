from selenium import webdriver
from selenium.webdriver.chrome.options import Options


def create_session_browser():
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument("--enable-javascript")
    chrome_options.add_argument("--lang=en")

    driver = webdriver.Chrome(options=chrome_options)

    # setting `San Diego, CA` geolocation
    geolocation = {
        "latitude": 32.7157,
        "longitude": -117.1610,
        "accuracy": 100
    }
    driver.execute_cdp_cmd("Emulation.setGeolocationOverride", geolocation)

    return driver