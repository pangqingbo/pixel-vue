<template>
  禁用disabled：
  <Button disabled>Button</Button>
  主按钮primary:
  <Button type="primary">Button</Button>
  消息info：
  <Button type="info">Button</Button>
  危险danger：
  <Button type="danger">Button</Button>
  警告warning：
  <Button type="warning">Button</Button>
  默认按钮：
  <Button>Button</Button>
  圆形按钮circle：
  <Button type="info" circle>Button</Button>
  小按钮small：
  <Button size="small">Button</Button>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 110px;
  margin: 10px auto;
}
</style>
