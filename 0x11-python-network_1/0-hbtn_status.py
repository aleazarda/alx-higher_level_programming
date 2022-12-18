#!/usr/bin/python3
""" A script that fetches https://alx-intranet.hbtn.io/status."""
import urllib.request


if __name__ == '__main__':
    r = urllib.request.Request('https://alx-intranet.hbtn.io/status')
    with urllib.request.urlopen(r) as res:
        result = res.read()
        print("Body response:")
        print("\t- type: {}".format(type(result)))
        print("\t- content: {}".format(result))
        print("\t- utf8 content: {}".format(result.decode("utf-8")))
