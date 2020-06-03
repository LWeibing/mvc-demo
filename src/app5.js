import "./app1.css";
import $ from "jquery";

const eventBar =$({})
const m = {
    data: {
        n: parseInt(localStorage.getItem('n'))
    },
    update(data){
        Object.assign(m.data,data)
        eventBar.trigger('m-updated')
    }
}
const v = {
    el: null,
    html: `
        <div class="active">
        <p id="number">{{n}}</p>
        <button id="add">+1</button>
        <button id="sub">-1</button>
        <button id="mul">×2</button>
        <button id="div">÷2</button>
        </div>
`,
    init(container) {
        v.el = $(container)
    },
    render(n) {
        if (v.el.children.length !== 0) {
            v.el.empty()
        }
        $(v.html.replace('{{n}}', n)).appendTo(v.el)
    }
}

const c = {
    init(container) {
        v.init(container)
        v.render(m.data.n)
        c.bindEvent()
        eventBar.on('m-updated',()=>{
            v.render(m.data.n)
        })
    },

    event: {
        "click #add": "add",
        "click #sub": "sub",
        "click #mul": "mul",
        "click #div": "div"
    },
    add() {
        m.update(m.data.n += 1)
    },
    sub() {
        m.update( m.data.n -= 1)
    },
    mul() {
        m.update( m.data.n *= 2)
    },
    div() {
        m.update( m.data.n /= 2)
    },
    bindEvent() {
        for (let key in c.event) {
            const value = c[c.event[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex)
            v.el.on(part1, part2, value)
        }
    }
}

export default c