"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsd_1 = require("tsd");
const index_js_1 = __importDefault(require("./index.js"));
(0, tsd_1.expectType)((0, index_js_1.default)('sindresorhus.com'));
(0, tsd_1.expectType)((0, index_js_1.default)('HTTP://xn--xample-hva.com:80/?b=bar&a=foo'));
(0, index_js_1.default)('//sindresorhus.com:80/', { defaultProtocol: 'https:' });
(0, index_js_1.default)('//sindresorhus.com:80/', { normalizeProtocol: false });
(0, index_js_1.default)('https://sindresorhus.com:80/', { forceHttp: true });
(0, index_js_1.default)('http://sindresorhus.com:80/', { forceHttps: true });
(0, index_js_1.default)('user:password@sindresorhus.com', { stripAuthentication: false });
(0, index_js_1.default)('sindresorhus.com/about.html#contact', { stripHash: true });
(0, index_js_1.default)('https://sindresorhus.com', { stripProtocol: true });
(0, index_js_1.default)('http://www.sindresorhus.com', { stripWWW: false }); // eslint-disable-line @typescript-eslint/naming-convention
(0, index_js_1.default)('www.sindresorhus.com?foo=bar&ref=test_ref', {
    removeQueryParameters: ['ref', /test/],
});
(0, index_js_1.default)('www.sindresorhus.com?foo=bar', {
    removeQueryParameters: true,
});
(0, index_js_1.default)('www.sindresorhus.com?foo=bar&utm_medium=test&ref=test_ref', {
    removeQueryParameters: false,
});
(0, index_js_1.default)('http://sindresorhus.com/', { removeTrailingSlash: false });
(0, index_js_1.default)('http://sindresorhus.com/', { removeSingleSlash: false });
(0, index_js_1.default)('www.sindresorhus.com/foo/default.php', {
    removeDirectoryIndex: [/^default\.[a-z]+$/, 'foo'],
});
(0, index_js_1.default)('www.sindresorhus.com?b=two&a=one&c=three', {
    sortQueryParameters: false,
});
(0, index_js_1.default)('www.sindresorhus.com/about#:~:text=hello', {
    stripTextFragment: false,
});
