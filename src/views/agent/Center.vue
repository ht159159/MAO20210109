<template>
  <div class="agent">
    <header-cmp title="代理中心 Trung tâm đại lý" />
    <div class="menus">
      <ul class="menu">
        <router-link tag="li" to="/agent/query" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-text">业绩查询Tra cứu thành tích</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" to="/agent/layer" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-text">排线码Mã FPC</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" to="/agent/mange" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-text">代理管理Quản lý đại lý</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" to="/agent/subordinatequery" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-text">下级查询Tra cứu cấp dưới</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" to="/agent/subordinate" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-text">发展下线Phát triển cấp dưới</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" to="/agent/faq" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-text">FAQ</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
