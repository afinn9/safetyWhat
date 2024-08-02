import { render } from "@testing-library/react";
import Login from "../../../src/Components/Login"

vi.mock('react', () => ({
  ...vi.importActual('react'),
  useState: (initial) => [initial, vi.fn()],
}));

describe("Login",()=>{
    it("check render login",()=>{
        render(<Login/>)
    })
})