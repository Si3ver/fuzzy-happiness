$.ajax({
  url: '/api/list',
  success(result) {
    let templateStr = `
      <ul>
        {{each data}}
          <li>{{$value}}</li>
        {{/each}}
      </ul>
      <div>
        <b>{{x}}</b>
      </div>
    `

    let html = template.render(templateStr, {
      data: result.data,
      x: 'hello'
    })
    
    $('#list').html(html)
  }
})