## Introduction: There are lot of benefits of using unknown compare to any.

### 1.
When we use any and our syntax is wrong, we cen't get error when writing and it shows in runtime
exp: const data: any = "next";
data.toFixed();

---

### 2.
When we use unkown , It suggest verify type before using this.
exp: let data: unknown = "next";
if (typeof data === "string") {
console.log(data.toUpperCase());
}

---

## Conclusion
any doesn't forced check type but unkbown does.
