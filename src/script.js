const cardTemplate = document.getElementById('card-template')
const cardContainer = document.getElementById('list-container')
;[
  {
    text: '\u0627\u0633\u0645\u0631 \u0645\u0648\u06a9\u0628\u0627\u0646\u06af \u0627\u0633\u0644\u0627\u06cc\u0645 \u0686\u0627\u0644\u0634 \u062e\u0648\u0634\u0645\u0632\u0647 \u062f\u0633\u062a\u067e\u062e\u062a',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfKolcZABQAAgEAAAACARD8aiqDaQ',
  },
  {
    text: '\u0622\u0634\u067e\u0632\u06cc \u0645\u062f\u0631\u0646',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwesdjsWABQAAgEAAAACAbFKou8czQ',
  },
  {
    text: '\u062f\u0647\u06a9\u062f\u0647 \u06a9\u06cc\u06a9 \u0648 \u0634\u06cc\u0631\u06cc\u0646\u06cc \u062e\u0627\u0646\u06af\u06cc \ud83d\ude0d\ud83c\udf82',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfHGzIFAAUAAgEAAAACARL4JmDSlA',
  },
  {
    text: '\u062f\u06cc\u0632\u0627\u06cc\u0646 \u062f\u0633\u0631 \u0622\u0634\u067e\u0632\u06cc\ud83e\udd5e',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwcYJRkJAAoAAgEAAAACAUagdSP5QQ',
  },
  {
    text: '\u0633\u0641\u0631\u0647 \u0622\u0631\u0627\u06cc\u06cc \u0631\u0646\u06af\u0627\u0631\u0646\u06af',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwehHHQjAAAAEA5kAwACAY4wdb1WUw',
  },
  {
    text: '\u0622\u0634\u067e\u0632\u06cc\ud83d\udc9e\u062e\u0627\u0646\u0645\ud83d\ude4b\u200d\u2640\ufe0f\u062e\u0648\u0646\u0647\ud83d\udc97',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwesy5cjAAAAEA5kAwACAWpjhwSFIg',
  },
  {
    text: '\u062f\u0633\u0631 \u0633\u06cc\u062a\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfe6lQZABQAAgEAAAACAYBWnSOOkw',
  },
  {
    text: '\u0622\u0645\u0648\u0632\u0634 \u0622\u0633\u0627\u0646 \u0622\u0634\u067e\u0632\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwefCN0XABQAAgEAAAACASXOOAAtHQ',
  },
  {
    text: '\u0645\u0632\u0647 \u062f\u0648\u0648\u0648\u0648\u0648\u0646 \ud83d\ude0b\ud83c\udf70',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwevAXIjAAAAEA5kAwACAcIcx6qxoQ',
  },
  {
    text: '\u0641\u0648\u062f \u0633\u06cc\u062a\u06cc \u2039\ud83c\udf7f\ud83c\udf54\u203a    (\u0644\u0630\u06cc\u0630\u062a\u0631\u06cc\u0646 \u0647\u0627\u060c\u0622\u0645\u0648\u0632\u0634\u060c\u0627\u0633\u0645\u0631\u0641\u0648\u062f\u060c\u0645\u0648\u06a9\u0628\u0627\u0646\u06af)\ud83d\ude10\ud83c\udf2d',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwe7HHQjAAAAEA5kAwACAQZTzccD8A',
  },
  {
    text: '\u201c \u0622\u0634\u067e\u0640\u0640\u0632 \u0645\u0627\u0631\u0634\u0645\u0627\u0631\u0644\u0640\u0648 \ud83c\udf66\ud83e\udd0d\u201e',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwerbMMXABQAAgEAAAACAVxycjW2Ow',
  },
  {
    text: '\u0634\u06cc\u0631\u06cc\u0646\u06cc \u067e\u0632\u06cc \u0622\u0648\u0627',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAweklfkVABQAAgEAAAACAUQV27thzg',
  },
  {
    text: 'asmr food | \u0627\u0633\u0645\u0631 \u0641\u0648\u062f',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAweKHtwXABQAAgEAAAACAb381JY3EA',
  },
  {
    text: '\ud835\ude0a\ud835\ude30\ud835\ude30\ud835\ude2c\ud835\ude26 \ud835\ude27\ud835\ude30\ud835\ude30\ud835\ude25\ud83c\udf55(\u0645\u0648\u06a9\u0628\u0627\u0646\u06af\u060c\u0627\u0633\u0645\u0631\u0641\u0648\u062f)',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAweoO8YIAAoAAgEAAAACATzMonyyGA',
  },
  {
    text: '\ud83c\udf81\u0633\u0641\u0631\u0647 \u0622\u0631\u0627\u06cc\u06cc \u0648 \u062f\u06cc\u0632\u0627\u06cc\u0646 \ud83c\udf81                                   \ud83c\udf64\u0622\u0634\u067e\u0632\u06cc\ud83c\udf5d',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwct_V4jAAAAEA5kAwACARoaYwD9uQ',
  },
  {
    text: '\ud83e\udd59\u062f\u0633\u062a\u067e\u062e\u062a \u062e\u0627\u0646\u0648\u0645 \u062e\u0648\u0646\u0647\ud83d\ude0d',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdoz2kjAAAAEA5kAwACAZlZf1Kp8w',
  },
  {
    text: '\ud83c\udf67\u062f\u0633\u0631\u0648\u0698\u0644\u0647 \u0645\u062f\u0631\u0646\ud83c\udf67',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdM73sjAAAAEA5kAwACAT2djYMo1A',
  },
  {
    text: '\ud83c\udf57\u0633\u0644\u0627\u0645\u062a\u06cc \u0648 \u0622\u0634\u067e\u0632\u06cc\ud83c\udf57',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwebRHEYABQAAgEAAAACAdHvnHBcRw',
  },
].forEach(element => {
  const clone = cardTemplate.content.cloneNode(true)
  const img = clone.getElementById('card-image')
  img.src = element.src
  img.id = null
  const text = clone.getElementById('card-text')
  text.textContent = element.text
  text.id = null
  cardContainer.appendChild(clone)
})

const catHolder = document.getElementById('categories')
const catTemplate = document.getElementById('category-template')
;[
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_4a3e3bbd118c41b48238766e82ca5e4a/aa13/337ef150c070b06bea7182818b4f5f7dab3627b9.png?temp_url_sig=a3f3a966c6770f104f063a432c2cc1bfe08ed012&temp_url_expires=4099667400&extra',
    text: 'فیلم و سریال',
  },
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_4a3e3bbd118c41b48238766e82ca5e4a/aa13/8846d30ce47499514cf703719e497f862ce89eb8.png?temp_url_sig=c2b7ff6d02b474dd52bb073ef352865b3e11d673&temp_url_expires=4099667400&extra',
    text: 'پخش زنده',
  },
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1682510258-%D8%B3%D8%A8%DA%A9%20%D8%B2%D9%86%D8%AF%DA%AF%DB%8C.png?temp_url_expires=4733510400&temp_url_sig=8183e4d912069a14cb802b1caa152e254836c2db',
    text: 'سبک زندگی',
  },
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_4a3e3bbd118c41b48238766e82ca5e4a/aa13/45af196b5bc988b6896db0a858965daae30330b3.png?temp_url_sig=e5ded42990d313a5f889f3ef9c70d32d4fec75da&temp_url_expires=4099667400&extra',
    text: 'بازی و سرگرمی',
  },
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1682510351-%D9%85%D8%B0%D9%87%D8%A8%DB%8C.jpg?temp_url_expires=4733510400&temp_url_sig=6d533e3a218f4aacd3fc489108622d6c53802ceb',
    text: 'مذهبی',
  },
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_bb1c47b2d16d4e7392604eb822626e0a/vitrin/1678630402-46fb8537606505a1ce82dcd20e2648fa6ac1c4d4.png?temp_url_expires=4733510400&temp_url_sig=1a7f785fbaa03be5f2fd00833b99438d90c68a83',
    text: 'کودکانه',
  },
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_4a3e3bbd118c41b48238766e82ca5e4a/aa13/82c5de6c9a7ca05080a0728cd728465b4d62c0b0.png?temp_url_sig=1874ab0850ec4744c832f79abddfc99be92e2e61&temp_url_expires=4099667400&extra',
    text: 'اخبار',
  },
  {
    src: 'https://cdnb2.splus.ir/v1/AUTH_4a3e3bbd118c41b48238766e82ca5e4a/aa13/c15bb706b01faf5d10123e28e69d7204cd1633ff.png?temp_url_sig=4101070ee6c6e4c32d74f23407805ad67b716629&temp_url_expires=4099667400&extra',
    text: 'زنگ مدرسه',
  },
].forEach(element => {
  const clone = catTemplate.content.cloneNode(true)
  const img = clone.getElementById('card-image')
  img.src = element.src
  img.id = null
  const text = clone.getElementById('card-text')
  text.textContent = element.text
  text.id = null
  catHolder.appendChild(clone)
})

const cardContainer2 = document.getElementById('list-container2')
;[
  {
    text: '\u0633\u0631\u0627\u06cc \u0647\u0646\u0631 \ud83d\udc9d',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfkdXAjAAAAEA5kAwACAYE5bjBc4w',
  },
  {
    text: '\u062e\u0627\u0646\u0647 \u0647\u0646\u0631 \u062e\u0648\u0631\u0634\u06cc\u062f',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwf-9Y4jAAAAEA5kAwACATv_BpSW-A',
  },
  {
    text: '\u062e\u0644\u0627\u0642\u06cc\u062a \u0648 \u062a\u0631\u0641\u0646\u062f',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwc0BaAjAAAAEA5kAwACARLN487REQ',
  },
  {
    text: '\u0628\u0627\u0646\u0648\u06cc \u062e\u0644\u0627\u0642',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwc7uFsjAAAAEA5kAwACAbF1mUHyhw',
  },
  {
    text: '\u067e\u0631\u0646\u0633\u0633 \u0631\u0648\u06cc\u0627\u06cc\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfvZ3MjAAAAEA5kAwACAQgb9fGkfQ',
  },
  {
    text: '\u0628\u0627\u0641\u062a\u0646\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAweXWZAjAAAAEA5kAwACAVQqTHg_5A',
  },
  {
    text: '\u0627\u0633\u062a\u0627\u06cc\u0644 \u0634\u06cc\u06a9',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwcJYpIjAAAAEA5kAwACAb3ATJf1Ww',
  },
  {
    text: '\u062c\u0647\u06cc\u0632\u06cc\u0647 \u0632\u06cc\u0628\u0627\u06cc \u0645\u0646',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwe7KHQjAAAAEA5kAwACAXO2SIVS3w',
  },
].forEach(element => {
  const clone = cardTemplate.content.cloneNode(true)
  const img = clone.getElementById('card-image')
  img.src = element.src
  img.id = null
  const text = clone.getElementById('card-text')
  text.textContent = element.text
  text.id = null
  cardContainer2.appendChild(clone)
})
const cardContainer3 = document.getElementById('list-container3')
;[
  {
    text: '\ud83c\udf43\u062f\u0644 \u0646\u0648\u0634\u0640\u0640\u0640\u062a\u0647\u2661\u067e\u0631\u0648\u0641\u0627\u06cc\u0644\ud83c\udf43',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfsVn0jAAAAEA5kAwACAbw09KH--w',
  },
  {
    text: '\u0639\u0627\u0634\u0642\u0640\u0640\u0640\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u0645\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0627 \ud83d\udc98\ud83d\udc98',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdJLGMjAAAAEA5kAwACAewMEnXS1w',
  },
  {
    text: '\u2764\ufe0f \u06a9\u0644\u06cc\u067e \u0639\u0627\u0634\u0642\u0627\u0646\u0647 \ud83d\ude0d',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfC4ZoMAA8AAgEAAAACAX0ciJi-lQ',
  },
  {
    text: '\u0622\u0648\u0627\u06cc  \u0627\u062d\u0633\u0627\u0633  \ud83d\udc95',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdVSlojAAAAEA5kAwACAe3MCLg9ag',
  },
  {
    text: '\u0628\u0627\u0634\u062e\u0635\u06cc\u062a \u0628\u0627\u0634\u06cc\u0645\ud83d\udc51',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwc2E4kjAAAAEA5kAwACAV3-48B9MQ',
  },
  {
    text: '\u0644\u0627\u06cc\u0648 \u0627\u0633\u062a\u0648\u0631\u06cc \u06a9\u0644\u06cc\u067e \u0639\u0627\u0634\u0642\u0627\u0646\u0647',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdbPHkjAAAAEA5kAwACARTvVg_eRg',
  },
  {
    text: '\u0645\u062a\u0646 \u0628\u0631\u062a\u0631 \u26a1\u2764\u26a1',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAweo6J8jAAAAEA5kAwACASlUHvoccg',
  },
  {
    text: '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062a\u0648',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdjyXojAAAAEA5kAwACASy-Oy56_g',
  },
].forEach(element => {
  const clone = cardTemplate.content.cloneNode(true)
  const img = clone.getElementById('card-image')
  img.src = element.src
  img.id = null
  const text = clone.getElementById('card-text')
  text.textContent = element.text
  text.id = null
  cardContainer3.appendChild(clone)
})
const cardContainer4 = document.getElementById('list-container4')
;[
  {
    text: '\u0627\u0633\u0631\u0627\u0631 \u0632\u06cc\u0628\u0627\u06cc\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdqHGYjAAAAEA5kAwACAcqMqOK9Iw',
  },
  {
    text: '\u0631\u0627\u0632 \u0645\u0639\u062c\u0632\u0647 \u0632\u06cc\u0628\u0627\u06cc\u06cc\ud83c\udf38\ud83d\udc97',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwffLwIsADcAAgEAAAACAQe6RVng0Q',
  },
  {
    text: '\ud83c\udf1f \u0627\u06cc\u062f\u0647 \u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \ud83c\udf1f',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwcbRdYhAB4AAgEAAAACASQIdjYhyw',
  },
  {
    text: '\ud83d\udc84\ud83d\udc51 \u0645\u062f \u0648 \u0632\u06cc\u0628\u0627\u06cc\u06cc\ud83d\udc51\ud83d\udc57',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwc8UZsjAAAAEA5kAwACAccSRkWLDw',
  },
  {
    text: '\u0622\u0631\u0627\u06cc\u0634 \u0648 \u0627\u06cc\u062f\u0647\u200c \u0631\u0648\u062a\u06cc\u0646\u200c \u067e\u0648\u0633\u062a\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAweFHnIjAAAAEA5kAwACAXuHDeFJNg',
  },
  {
    text: '\u0634\u0628\u06a9\u0647 \u0622\u0631\u0627\u064a\u0634',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwcxWIEjAAAAEA5kAwACAQc6gxGgjw',
  },
].forEach(element => {
  const clone = cardTemplate.content.cloneNode(true)
  const img = clone.getElementById('card-image')
  img.src = element.src
  img.id = null
  const text = clone.getElementById('card-text')
  text.textContent = element.text
  text.id = null
  cardContainer4.appendChild(clone)
})
const cardContainer5 = document.getElementById('list-container5')
;[
  {
    text: '\u0631\u0648\u0627\u0646\u0634\u0646\u0627\u0633\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwcwS3MjAAAAEA5kAwACAY-WP1sEDA',
  },
  {
    text: '\u062a\u0631\u0628\u06cc\u062a \u0641\u0631\u0632\u0646\u062f',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfZcIQjAAAAEA5kAwACASIgjHXB6A',
  },
  {
    text: '\u0647\u0645\u0633\u0631 \u0645\u0646',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwf9DJMjAAAAEA5kAwACAXG9K4GSkA',
  },
  {
    text: '\u0631\u0627\u0632 \u0633\u0644\u0627\u0645\u062a\u06cc(\u0628\u0627\u0646\u0648\u0627\u0646)',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwchP3wjAAAAEA5kAwACAYQdQ1OCoQ',
  },
  {
    text: '\u0627\u0646\u06af\u06cc\u0632\u0634\u06cc\u060c \u0642\u0627\u0646\u0648\u0646 \u062c\u0630\u0628\u060c \u0631\u0645\u0632 \u0645\u0648\u0641\u0642\u06cc\u062a',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfGEIEjAAAAEA5kAwACAchSC1pyDg',
  },
  {
    text: '\ud83d\udc96(\u0633\u0650\u0631 \u0647\u0627\u06cc)\u0631\u0627\u0632\u0647\u0627\u06cc\ud83d\udc9e\u0647\u0645\u0633\u0631\u062f\u0627\u0631\u06cc\ud83d\udc9d\ud83d\udc8d',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwdjwGojAAAAEA5kAwACAaMduXsQ1w',
  },
  {
    text: '\u062f\u06a9\u062a\u0631 \u0633\u0644\u0627\u0645\u062a',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwfAN-QXABQAAgEAAAACAVKsEIOUPA',
  },
  {
    text: '\u0635\u062f\u0627\u06cc \u0632\u0646\u062f\u06af\u06cc',
    src: 'https://file-dl.splus.ir/api/v2/files/download/AgECgUMBAwem-HwjAAAAEA5kAwACAQf75sCw3A',
  },
].forEach(element => {
  const clone = cardTemplate.content.cloneNode(true)
  const img = clone.getElementById('card-image')
  img.src = element.src
  img.id = null
  const text = clone.getElementById('card-text')
  text.textContent = element.text
  text.id = null
  cardContainer5.appendChild(clone)
})

const ele = document.getElementById('sliderContainer')
ele.scrollTop = 100
ele.scrollLeft = 150

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x
  const dy = e.clientY - pos.y

  // Scroll the element
  ele.scrollTop = pos.top - dy
  ele.scrollLeft = pos.left - dx
}
const mouseUpHandler = () => {
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHandler)

  ele.style.scrollBehavior = 'smooth'
  ele.style.scrollSnapType = 'x mandatory'
  ele.style.cursor = 'grab'
}

const mouseDownHandler = e => {
  pos = {
    // The current scroll
    left: ele.scrollLeft,
    top: ele.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  }

  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler)
  ele.style.scrollSnapType = 'none'
  ele.style.scrollBehavior = 'unset'
  ele.style.cursor = 'grabbing'
}

ele.addEventListener('mousedown', mouseDownHandler)
