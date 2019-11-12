<template>
  <div class="text-center">
    <h1>
      404
      <span>Error</span>
    </h1>
    <p>Sorry, we cannot find what you are looking for.</p>
    <p>It looks like this was the result of either:</p>
    <ul>
      <li>a mistyped address</li>
      <li>an out-of-date link</li>
    </ul>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Page Not Found"
  }
};
</script>
  <style scoped>
::-moz-selection {
  background: #fe57a1;
  color: #fff;
  text-shadow: none;
}
::selection {
  background: #fe57a1;
  color: #fff;
  text-shadow: none;
}
html {
  padding: 30px 10px;
  font-size: 20px;
  line-height: 1.4;
  color: #737373;
  background: #f0f0f0;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
html,
input {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
body {
  max-width: 500px;
  _width: 500px;
  padding: 30px 20px 50px;
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;
  background: #fcfcfc;
}
h1 {
  margin: 0 10px;
  font-size: 50px;
  text-align: center;
}
h1 span {
  color: #bbb;
}
h3 {
  margin: 1.5em 0 0.5em;
}
p {
  margin: 1em 0;
}
ul {
  padding: 0 0 0 40px;
  margin: 1em 0;
}
.container {
  max-width: 380px;
  _width: 380px;
  margin: 0 auto;
}
</style>