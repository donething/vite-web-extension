import React from "react"
import injectComponent from "@/mylib/injectComponent"
import styles from "./style.css?inline"
import {Button} from "@/components/ui/button"
import {Toaster} from "@/components/ui/toaster"
import {toast} from "@/components/ui/use-toast"

// 注入 shadcn-ui 的 toast
injectComponent(
  <div className={"absolute bottom-0 left-0 "}>
    <Toaster/>

    <Button onClick={() => toast({description: "content script loaded"})}>点击内容脚本的按钮</Button>
  </div>, styles
)

try {
  console.log("content script loaded")
} catch (e) {
  console.error(e)
}
