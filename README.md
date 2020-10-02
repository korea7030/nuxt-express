# Nuxt + Nodejs(express) example
## 소스 구조
### clientside/musicapp - client source 

nuxt.config.js - nuxt project 설정 관련 파일로 plugin, build, 외부 모듈 등 설정이 가능  
/plugins - swal dialog 사용을 위한 plugins  
/partial - navigation bar  
/pages - nuxt 프로젝트에서 route 역할을 함  
/layouts - nuxt의 UI default template 부분을 담당  
/components - 보여주고자 하는 화면을 component 화 하고자 할 때 사용  
/assets - 이미지, 파일 등 static 정보

-------------------------------------------------------------
### serverside - backend server

### URL 구조
| HTTP Method | url  | Second Header |
| ------------- | ------------- | ------------- |
| POST  | /music | Add New Music  |
| GET  | /music  | Get All Music  |
| DELETE  | /music/:blogId  | Delete Music  |

#### 참고 : https://www.smashingmagazine.com/2020/02/music-manager-nuxtjs-expressjs/