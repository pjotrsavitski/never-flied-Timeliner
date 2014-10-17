/**
 * Code contributed to the Learning Layers project
 * http://www.learning-layers.eu
 * Development is partly funded by the FP7 Programme of the European Commission under
 * Grant Agreement FP7-ICT-318209.
 * Copyright (c) 2014, Tallinn University - Institute of Informatics (Centre for Educational Technology).
 * For a list of contributors see the AUTHORS file at the top-level directory of this distribution.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');

var app = require('../app');

describe('Routes', function() {
  var agent = request.agent(app);

  it('GET /favicon.ico', function(done) {
    agent
      .get('/favicon.ico')
      .expect('Content-Type', 'image/x-icon')
      .expect(200, done);
  });

  describe('Static', function() {

    it('GET /stylesheets/style.css', function(done) {
      agent
        .get('/stylesheets/style.css')
        .expect('Content-Type', /css/)
        .expect(200, done);
    });

  });

  it('GET /', function(done) {
    agent
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('GET /users', function(done) {
    agent
      .get('/users')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('GET /404', function(done) {
    agent
      .get('/404')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
  
});
