<template>
    <div class="btnContainer">
        <div>
            <p>禁用disabled：</p>
            <Button disabled>Button</Button>
        </div>
        <div>
            <p>主按钮primary：</p>
            <Button type="primary">Button</Button>
        </div>
        <div>
            <p>消息按钮info：</p>
            <Button type="info">Button</Button>
        </div>
        <div>
            <p>危险danger：</p>
            <Button type="danger">Button</Button>
        </div>
        <div>
            <p>警告warning：</p>
            <Button type="warning">Button</Button>
        </div>
        <div>
            <p>默认按钮default：</p>
            <Button>Button</Button>
        </div>
        <div>
            <p>圆形按钮circle：</p>
            <Button type="info" circle>Button</Button>
        </div>
        <div>
            <p>小按钮small：</p>
            <Button size="small">Button</Button>
        </div>
        <div>
            <p>水波纹按钮wave(鼠标移入)：</p>
            <Button wave>Button</Button>
        </div>
    </div>
</template>

<style scoped>
.btnContainer{
    display: flex;
    flex-wrap: wrap;
}
.btnContainer div{
    width: 100px;
    margin-right: 10px;
}
</style>