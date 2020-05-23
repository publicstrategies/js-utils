
# js-utils
[![Build Status](https://travis-ci.com/publicstrategies/js-utils.svg?branch=master)](https://travis-ci.com/publicstrategies/js-utils)
[![Coverage Status](https://coveralls.io/repos/github/publicstrategies/js-utils/badge.svg?branch=master)](https://coveralls.io/github/publicstrategies/js-utils?branch=master)

## Functions

<dl>
<dt><a href="#arrayOf">arrayOf(array, key)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Takes an array of any objects and accumulates an array of a shared property
between them.</p></dd>
<dt><a href="#sumOf">sumOf(array, ...keys)</a> ⇒ <code>number</code></dt>
<dd><p>Takes an array of any objects and recursively adds a shallow or complex
property shared between them.</p></dd>
</dl>

<a name="arrayOf"></a>

## arrayOf(array, key) ⇒ <code>Array.&lt;any&gt;</code>
<p>Takes an array of any objects and accumulates an array of a shared property
between them.</p>


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | <p>The array of objects with a shared property.</p> |
| key | <code>string</code> | <p>The property accessor for the objects in the array.</p> |

**Example**  
```ts
const data = [
  { complex: { value: 'x' }, id: 1, name: 'John' },
  { complex: { value: 'y' }, id: 2, name: 'Jane' },
];

arrayOf(data, "complex"); // [{ value: 'x' }, { value: 'y' }]
arrayOf(data, "id"); // [1, 2]
arrayOf(data, "name"); // ["John", "Jane"]
```
<a name="sumOf"></a>

## sumOf(array, ...keys) ⇒ <code>number</code>
<p>Takes an array of any objects and recursively adds a shallow or complex
property shared between them.</p>


| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | <p>The array of objects with a shared shallow or nested property.</p> |
| ...keys | <code>string</code> | <p>The property accessor(s) for the objects in the array.</p> |

**Example**  
```ts
const data = [{ nested: { value: 12 } }, { nested: { value: 34 } }];

sumOf(data, "nested", "value"); // 46
```
