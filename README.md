## Functions

<dl>
<dt><a href="#sumOf">sumOf(array, ...keys)</a> ⇒ <code>number</code></dt>
<dd><p>Takes an array of any objects and recursively adds a shallow or complex
property shared between them.</p>
<pre class="prettyprint source lang-ts"><code>const data = [{ nested: { value: 12 } }, { nested: { value: 34 } }];

<p>sumOf(data, &quot;nested&quot;, &quot;value&quot;); // 46
</code></pre></p>
</dd>
<dt><a href="#thunk">thunk(fn, args)</a> ⇒ <code>void</code></dt>
<dd></dd>
</dl>

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

<a name="thunk"></a>

## thunk(fn, args) ⇒ <code>void</code>

| Param | Type                           | Description                                          |
| ----- | ------------------------------ | ---------------------------------------------------- |
| fn    | <code>void</code>              | <p>The function to be thunked.</p>                   |
| args  | <code>Array.&lt;any&gt;</code> | <p>The arguments passed to the thunked function.</p> |

