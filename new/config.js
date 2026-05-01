/**
 * VISION 摄影工作室 - 配置文件
 * 修改此文件中的配置，快速更新网站信息
 */

const SITE_CONFIG = {
  // 基本信息
  siteName: 'VISION',
  siteTitle: 'VISION - 高端摄影工作室',
  siteDescription: '专业级摄影服务，为您记录最珍贵的时刻',

  // 联系方式
  contact: {
    wechatId: 'vision_photo2024',
    phone: '010-8888-8888',
    phoneHref: '+86-10-8888-8888',
    email: 'contact@vision-photo.com',
  },

  // 社交媒体（页脚）
  social: {
    weibo: '#',
    wechat: '#',
    xiaohongshu: '#',
    douyin: '#',
    instagram: '#',
  },

  // 公司信息
  company: {
    name: 'VISION 摄影工作室',
    year: 2024,
    copyright: '© 2024 VISION 摄影工作室. 版权所有',
  },

  // 服务项目
  services: [
    {
      icon: '💒',
      title: '婚礼摄影',
      description: '全天记录，多机位拍摄，精心设计婚礼摄影方案，为您留下永恒的回忆'
    },
    {
      icon: '👤',
      title: '人像拍摄',
      description: '写真、证件照、形象照，专业化妆造型，专属定制拍摄方案'
    },
    {
      icon: '🏢',
      title: '商业摄影',
      description: '企业宣传、产品展示、品牌形象，满足各类商业需求'
    },
    {
      icon: '🎂',
      title: '活动摄影',
      description: '生日派对、公司活动、发布会，全程跟踪记录精彩时刻'
    },
    {
      icon: '🌍',
      title: '旅拍摄影',
      description: '风景地带、城市探索、旅游记录，专业的后期处理和输出'
    },
    {
      icon: '✂️',
      title: '后期修图',
      description: '精细调色、人像修饰、创意设计，打造完美的最终作品'
    }
  ],

  // 价格方案
  pricing: [
    {
      name: '基础套餐',
      price: 1999,
      period: '4小时拍摄',
      featured: false,
      features: [
        '4小时专业摄影',
        '电子版 (100张精选)',
        '基础修图处理',
        '线上交付',
        '7天后期支持'
      ]
    },
    {
      name: '标准套餐',
      price: 3999,
      period: '8小时拍摄',
      featured: true,
      badge: '最受欢迎',
      features: [
        '8小时专业摄影',
        '电子版 (200张精选)',
        '精细修图处理',
        '精装相册 (20页)',
        '免费调整修改',
        '30天后期支持'
      ]
    },
    {
      name: '高级套餐',
      price: 7999,
      period: '全天拍摄',
      featured: false,
      features: [
        '全天专业摄影',
        '电子版 (500张精选)',
        '高端精修处理',
        '精装相册 (40页)',
        '视频制作 (3-5分钟)',
        '终身后期支持'
      ]
    }
  ],

  // 统计数据
  stats: [
    { number: '2500+', label: '完成项目' },
    { number: '98%', label: '客户满意度' },
    { number: '12+', label: '行业奖项' },
    { number: '15年', label: '专业经验' }
  ],

  // 特色优势
  features: [
    '经验丰富的专业团队',
    '最先进的摄影设备',
    '创意十足的拍摄方案',
    '快速高效的后期处理',
    '24小时贴心客服支持',
    '满意度保证退款政策'
  ],

  // 作品分类
  portfolio: [
    { title: '婚礼摄影', description: '记录爱情的每一刻' },
    { title: '人像摄影', description: '捕捉独特气质' },
    { title: '风景摄影', description: '大自然的诗篇' },
    { title: '产品摄影', description: '展现商品魅力' },
    { title: '活动摄影', description: '记录精彩时刻' },
    { title: '航拍摄影', description: '俯瞰世界之美' }
  ]
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
