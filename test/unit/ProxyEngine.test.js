'use strict'

const assert = require('assert')

describe('Proxy Engine App', () => {
  it('should have Proxy Engine', () => {
    assert(global.app.proxyEngine)
    assert(global.app.proxyEngine.pubSub)
    assert(global.app.proxyEngine.scheduler)
  })
  it('should have Proxy Engine Cron Jobs', () => {
    assert(global.app.crons)
    assert(global.app.api.crons)
  })
  it('should have Proxy Engine Events', () => {
    assert(global.app.events)
    assert(global.app.api.events)
  })
  it('should have Proxy Engine Tasks', () => {
    assert(global.app.tasks)
    assert(global.app.api.tasks)
  })
  it('should have Proxy Engine Generics', () => {
    assert(global.app.api.generics)
  })
  it('should have Proxy Engine Emails', () => {
    assert(global.app.api.emails)
  })
  it('should have Proxy Engine Templates', () => {
    assert(global.app.api.templates)
  })
})
