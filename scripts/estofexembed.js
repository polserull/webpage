fetch('https://www.estofex.org/cgi-bin/polygon/showforecast.cgi?xml=yes')
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const forecastType = data.getElementsByTagName('forecast_type')[0].textContent;
    const startTime = data.getElementsByTagName('start_time')[0].getAttribute('value');
    const expiryTime = data.getElementsByTagName('expiry_time')[0].getAttribute('value');
    const issueTime = data.getElementsByTagName('issue_time')[0].getAttribute('value');
    const forecaster = data.getElementsByTagName('forecaster')[0].textContent;
    const domain = data.getElementsByTagName('domain')[0].textContent;
    const text = data.getElementsByTagName('text')[0].textContent;

    document.getElementById('forecastType').innerText = `Forecast Type: ${forecastType}`;
    document.getElementById('startTime').innerText = `Start Time: ${startTime}`;
    document.getElementById('expiryTime').innerText = `Expiry Time: ${expiryTime}`;
    document.getElementById('issueTime').innerText = `Issue Time: ${issueTime}`;
    document.getElementById('forecaster').innerText = `Forecaster: ${forecaster}`;
    document.getElementById('domain').innerText = `Domain: ${domain}`;
    document.getElementById('text').innerHTML = text.replace(/<BR>/g, '<br>');
  })
  .catch(err => console.error('Error fetching XML data:', err));