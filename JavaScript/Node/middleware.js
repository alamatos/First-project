const step1 = (content, next) => {
    content.value1 = 'mid1'
    next()
}

const step2 = (content, next) => {
    content.value2= 'mid2'
    next()
}

const step3 = content => content.value = 'mid3'

const exec = (content, ...middlewares) => {
    const execStep = index => {
       if(middlewares && index< middlewares.length) {
            middlewares[index]
            (content, () => execStep(index+1))
            }
            
    }
    execStep(0)
}

const content = {}
exec(content, step1, step2, step3)
console.log(content)