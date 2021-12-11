<template>
    <div class="btnContainer">
        <div>
            <table>
                <tr>
                    <td>disabled按钮</td>
                    <td>primary按钮</td>
                    <td>info按钮</td>
                    <td>danger按钮</td>
                    <td>warning按钮</td>
                    <td>默认按钮</td>
                </tr>
            </table>
        </div>
        <div>
            <p-button disabled>Button</p-button>
            <p-button type="primary">Button</p-button>
            <p-button type="info">Button</p-button>
            <p-button type="danger">Button</p-button>
            <p-button type="warning">Button</p-button>
            <p-button>Button</p-button>
        </div>
        <div>
            <p-button disabled round>Button</p-button>
            <p-button type="primary" round>Button</p-button>
            <p-button type="info" round>Button</p-button>
            <p-button type="danger" round>Button</p-button>
            <p-button type="warning" round>Button</p-button>
            <p-button round>Button</p-button>
        </div>
        <div>
            <p-button wave>Button</p-button>
        </div>
        <div>
            <p-button disabled size="small">Button</p-button>
            <p-button type="primary" size="small">Button</p-button>
            <p-button type="info" size="small">Button</p-button>
            <p-button type="danger" size="small">Button</p-button>
            <p-button type="warning" size="small">Button</p-button>
            <p-button size="small">Button</p-button>
        </div>
        <div>
            <p-button circle disabled>
                <i class="fas fas fa-trash-alt"></i>
            </p-button>
            <p-button circle type="primary">
                <i class="fas fas fa-trash-alt"></i>
            </p-button>
            <p-button circle type="info">
                <i class="fas fas fa-trash-alt"></i>
            </p-button>
            <p-button circle type="danger">
                <i class="fas fas fa-trash-alt"></i>
            </p-button>
            <p-button circle type="warning">
                <i class="fas fas fa-trash-alt"></i>
            </p-button>
            <p-button circle>
                <i class="fas fas fa-trash-alt"></i>
            </p-button>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
table{
    border-left: 1px solid black;
    border-top: 1px solid black;
    border-spacing: 0;
    text-align: center;
    font-size: 14px;
}
table td{
    border-right: 1px solid black;
    border-bottom: 1px solid black;
}
div button{
    margin-right: 5px;
    margin-top: 5px;
}
</style>
