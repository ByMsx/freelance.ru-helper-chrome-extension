/**
 * @param {string} filterKey
 * @param {function} callback
 */
function getFilterValue(filterKey, callback) {
  chrome.storage.sync.get(filterKey, function(data) {
    callback(null, data[filterKey]);
  });
}

/**
 * @param {string} filterKeys
 * @param {function} callback
 */
function getMultipleFilterValues(filterKeys, callback) {
  chrome.storage.sync.get(filterKeys, function(data) {
    callback(null, data);
  });
}

/**
 * @param {string} filterKey
 * @param {boolean} value
 * @param {function} callback
 */
function toggleFilter(filterKey, value, callback) {
  const data = {};
  data[filterKey] = value;
  chrome.storage.sync.set(data, function() {
    callback(null);
  });
}

function reloadFreelanceTab() {
  chrome.tabs.getSelected(null, function(tab) {
    if (tab.url.match(/^https?:\/\/freelance\.ru.*/g)) {
      chrome.tabs.reload(tab.id, {}, function() {});
    }
  });
}
