#!/usr/bin/env node

const browserify = require('browserify');
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const splitRequire = require('split-require/plugin')
const to = require('flush-write-stream')

const b = browserify({ debug: true })
b.add('./components/main.js')
b.plugin(splitRequire, {
  output: hashOutput
})
b.bundle().pipe(hashOutput('main.js'))

function hashOutput (bundleName) {
  const stream = fs.createWriteStream('/tmp/' + bundleName)
  const hash = crypto.createHash('sha1')
  return to(onwrite, onend)

  function onwrite (chunk, enc, cb) {
    hash.update(chunk)
    stream.write(chunk, cb)
  }
  function onend (cb) {
    stream.end()
    const name = bundleName.replace(/\.js$/, '')
      + '_' + hash.digest('hex').slice(0, 10) + '.js'
    this.emit('name', name)
    fs.rename(path.join('/tmp/' + bundleName), path.join('./bundle', name), cb)
  }
}
