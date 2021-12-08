<template>
    <div class="btnContainer">
        <div>
            <Button disabled>Button</Button>
            <Button type="primary" @click="say">Button</Button>
            <Button type="info">Button</Button>
            <Button type="danger">Button</Button>
            <Button type="warning">Button</Button>
            <Button>Button</Button>
        </div>
        <div>
            <Button disabled round>Button</Button>
            <Button type="primary" round>Button</Button>
            <Button type="info" round>Button</Button>
            <Button type="danger" round>Button</Button>
            <Button type="warning" round>Button</Button>
            <Button round>Button</Button>
        </div>
        <div>
            <Button wave>Button</Button>
        </div>
        <div>
            <Button disabled size="small">Button</Button>
            <Button type="primary" size="small">Button</Button>
            <Button type="info" size="small">Button</Button>
            <Button type="danger" size="small">Button</Button>
            <Button type="warning" size="small">Button</Button>
            <Button size="small">Button</Button>
        </div>
        <div>
            <Button circle disabled>
                <i class="fas fas fa-trash-alt"></i>
            </Button>
            <Button circle type="primary">
                <i class="fas fas fa-trash-alt"></i>
            </Button>
            <Button circle type="info">
                <i class="fas fas fa-trash-alt"></i>
            </Button>
            <Button circle type="danger">
                <i class="fas fas fa-trash-alt"></i>
            </Button>
            <Button circle type="warning">
                <i class="fas fas fa-trash-alt"></i>
            </Button>
            <Button circle>
                <i class="fas fas fa-trash-alt"></i>
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        say() {
            console.log("hi");
        },
    },
};
</script>
