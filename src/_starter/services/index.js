/**
 *  Helper function for fetching data
 *
 * @param  {String}  url endpoint you want to hit
 * @return {JSON} formatted json data from endpoint
 */
export async function fetchData(url){
  const response = await fetch(url);
  console.log('url', url)
  console.log('response', response)
  const data = await response.json();
  return data;
}

/**
 *  Formats date to MMM DD, YYYY (i.e. Apr 8, 2020)
 *
 * @param  {String}      dateString
 * @return {string}
 */
export function formatDate(dateString){
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

/**
 * Formats time to HH:MM am/pm (i.e. 07:5 PM)
 *
 * @param  {String}      dateString
 * @param  {Boolean}     hour12 set to false if you don't need AM/PM
 * @return {string}
 */
export function formatTime(dateString, hour12 = true){
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12 })
}
