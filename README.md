http://pax-pwa-react.azurewebsites.net/

## Feature List

1. Visual Shopping experience
2. Point camera on an object and it shows information on where you can buy it
3. Offline it will identify the object and the save the ID information and when it's back online it will run that API call to get the info on where to buy it. It will then send you a push notification with that info.
4. Client side ML uses TensorFlowJS and for the Windows version it will use the WinML Windows only APIs.
5. React PWA App that uses TypeScript to access the Windows 10 APIs.

## Todo

* Add typescript (Justin)
* ~~Deploy to Azure (Alex/Rumsha/Justin)~~
    * ~~Add CI~~
    * ~~Add CD~~
* Get it running on Win10 (Alex)
    * Add support for WinML on Win10 (Alex)
* Add support for TensorFlow.JS (Justin)
* ~~Set up repo (Rumsha/Justin)~~
* ~~Add react router (Alex/Rumsha/Justin)~~
* Add access to ther Camera and draw to a canvas (Rumsha)
* Call Bing Search or equivalent JSON API (Rumsha)
* Use PWA Builder (Alex)
* Do something on serverside