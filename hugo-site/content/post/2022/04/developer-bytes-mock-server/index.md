---
title: Developer Bytes - MockServer
date: 2022-04-18 00:00:02
tags: [
  "Developer Bytes",
  "MockServer"
]
categories: [
  "Developer Bytes",
  "MockServer"
]
desc: Easily mock any system you integrate with via HTTP or HTTPS with MockServer!
draft: false
---

One of the tools that I have found extremely useful and easy to use while developing against another API is called [MockServer](https://www.mock-server.com/). MockServer is tool that will allow you to create a local server that will respond to requests and take actions based on the configuration that you provide. This is really useful for when you want to mock the API responses that would be returned from various API calls. To use this tool, you need to provide a json file that contains the expectations you would like the service to take action on.

As an example, lets say I was building a service that integrates with a third party API that provides weather related data based on a zip code that is provided to the API. While working on the service locally, I could continue to make API calls to this third party service, but often times this is not ideal and would prefer to just work with mock data. Luckily, this is easily done with MockServer. To do so, I would just need to provide a configuration similar to this:

```json
[
  {
    "httpRequest": {
      "path": "/api/v1/weather",
      "method": "POST"
    },
    "httpResponse": {
      "body": {
        "contentType": "application/json",
        "json": {
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ]
        }
      }
    }
  }
]
```

By providing this configuration file, when MockServer returns a POST request on the `/api/v1/weather` path, the service will return the JSON response that is defined in the configuration above. Now, I just need to update my service to point to local endpoint that MockServer is running on and I can continue developing my application as before.

What is nice about the configuration file is that we can match on a variety of properties of the HTTP request and respond accordingly. In the example above, we are just checking if the HTTP request method was a `POST` and if the path was `/api/v1/weather`. MockServer supports one or more of the following properties that can be used for matching requests:

* method - property matcher
* path - property matcher
* path parameters - key to multiple values matcher
* query string parameters - key to multiple values matcher
* headers - key to multiple values matcher
* cookies - key to single value matcher
* body - body matchers
* secure - boolean value, true for HTTPS

Besides just allowing you to mock any server or service via HTTP or HTTPS, MockerServer can do the following:

* proxy all requests using any of the following proxying methods:
  * Port Forwarding
  * Web Proxying (i.e. HTTP proxy)
  * HTTPS Tunneling Proxying (using HTTP CONNECT)
  * SOCKS Proxying (i.e. dynamic port forwarding)
* verify proxied requests have been sent (i.e. in a test assertion)
* record proxied requests and responses to analyze how a system behaves

If you get the time, I highly recommend that you checkout this tool if you have not seen it before.

I hope you enjoyed this post. Please feel free to post any comments or questions below.
