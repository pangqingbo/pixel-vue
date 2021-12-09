<template>
  <div id="signPage">

      <!-- input输入框 -->
      <div class="userInput">
        <p-input placeholder="账号" type="noBorder">
            <template #preicon>
                <i class="fas fa-user"></i>
            </template>
        </p-input>
      </div>
      <div class="userInput">
        <p-input placeholder="密码" type="noBorder">
            <template #preicon>
                <i class="fas fa-key"></i>
            </template>
        </p-input>
      </div>

      <!-- 多选框,包含反选按钮 -->
      <div>
        <span>标签：</span>
        <p-checkbox-group
        :items="items"
        :checkedAllBtn="true"
        :checkedReverseBtn="true"
        ></p-checkbox-group>
      </div>

      <!-- 取消确定按钮 -->
      <div class="btnContainer">  
        <p-button size="small">取消</p-button>
        <p-button type="primary" size="small">确定</p-button>
      </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            items:[
                {value: "手游党"},
                {value: "宅男"},
                {value: "为了部落"},
                {value: "兽人永不为奴"},
                {value: "天然呆"},
                {value: "干饭人"},
                {value: "天然呆"},
                {value: "天然呆"},
            ]
        }
    }
}
</script>

<style scoped>
#signPage{
    width: 400px;
}
.btnContainer{
    display: flex;
}
.userInput{
    margin: 5px 0;
}
</style>