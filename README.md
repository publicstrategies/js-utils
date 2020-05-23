
# js-utils
[![Build Status](https://travis-ci.com/publicstrategies/js-utils.svg?branch=master)](https://travis-ci.com/publicstrategies/js-utils)
[![Coverage Status](https://coveralls.io/repos/github/publicstrategies/js-utils/badge.svg?branch=master)](https://coveralls.io/github/publicstrategies/js-utils?branch=master)

<a name="sumOf"></a>

## sumOf(array, ...keys) ⇒ <code>number</code>
<p>Takes an array of any objects and recursively adds a shallow or complex
property shared between them.</p>
<pre class="prettyprint source lang-ts"><code>const data = [{ nested: { value: 12 } }, { nested: { value: 34 } }];

sumOf(data, &quot;nested&quot;, &quot;value&quot;); // 46
</code></pre>


| Param   | Type                           | Description                                                           |
| ------- | ------------------------------ | --------------------------------------------------------------------- |
| array   | <code>Array.&lt;any&gt;</code> | <p>The array of objects with a shared shallow or nested property.</p> |
| ...keys | <code>string</code>            | <p>The property accessor(s) for the objects in the array.</p>         |

