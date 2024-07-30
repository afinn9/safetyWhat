import {it,describe,expect} from 'vitest'
import { render,screen } from '@testing-library/react'
import App from "./App"

describe("App",()=>{
    it("to check rendering",()=>{
        render(<App/>)
    })
})