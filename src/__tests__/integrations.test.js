import React from 'react'
import {mount} from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'cooment1'}, {name: 'comment2'}]
  })
})

afterEach(()=>{
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done)=>{
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  wrapped.find('.fetch-comments').simulate('click')
   moxios.wait(() => {//timeout is for moxios to complete request
    wrapped.update() //to update all components
    expect(wrapped.find('li').length).toEqual(2) //without done() test will always pass
    done();
    wrapped.unmount()
  })
})
