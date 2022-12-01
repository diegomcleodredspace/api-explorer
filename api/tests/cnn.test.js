import supertest from 'supertest'
import '../cnn'
import { AssertionError } from 'assert'


describe('cnn api', () => { 
  const contentCNN = 'https://plus.cnn.com'
  const liveStreamCNN = 'https://plus.cms.cnn.com'
  const request = require('supertest');
  const assert = require('assert');

  beforeEach(async () => {
  })
  afterEach(async () => {
    //cleanup
  })

  // TV channels meta data 
  it('TV channels content with 200, returns json, and validate values in body', () => {
    request(contentCNN)
      .get('/plus/live.ott')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(function(res) {
        if (!res.body.hasOwnProperty('screen')) throw new Error("Expected 'screen' key!");
        if (!res.body.hasOwnProperty('item')) throw new Error("Expected 'item' key!");        
      })
      .end(function(err, res) {
        if (err) throw err;
      });
  });

  // live video stream
  it('Live stream CNN responds with 200 and returns json',  () => {
    request(liveStreamCNN)
      .get('/_components/cnn-plus-asset/instances/cnn-plus-live-cnn@published')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end(function(err, res) {
        if (err) throw err;
      });
  });
  it('Live stream CNN international responds with 200 and returns json', () => {
    request(liveStreamCNN)
      .get('/_components/cnn-plus-asset/instances/cnn-plus-live-cnni@published')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end(function(err, res) {
        if (err) throw err;
      });
  });
  it('Live stream CNN HLN responds with 200 and returns json', () => {
    request(liveStreamCNN)
      .get('/_components/cnn-plus-asset/instances/cnn-plus-live-hln@published')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end(function(err, res) {
        if (err) throw err;
      });
  });
});
