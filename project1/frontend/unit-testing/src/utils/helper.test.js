import {it,describe,expect} from 'vitest'
import {add} from "./helper"

describe("Helper",()=>{
    it("check sum 1+1=2",()=>{
        expect(add(1,1)).toBe(2)
    })

    it("check sum 500+1500=2000",()=>{
        expect(add(500,1500)).toBe(2000)
    })

})