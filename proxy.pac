function FindProxyForURL(url, host) {
  var blocked = ["instagram.com","cdninstagram.com","instagr.am","ig.me",
                 "facebook.com","fb.com","fb.me","fbcdn.net","fbsbx.com"];
  for (var i = 0; i < blocked.length; i++) {
    if (host == blocked[i] || dnsDomainIs(host, "." + blocked[i]))
      return "PROXY 127.0.0.1:9";
  }
  return "DIRECT";
}
