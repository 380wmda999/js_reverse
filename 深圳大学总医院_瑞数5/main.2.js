
delete __dirname
delete __filename


function get_enviroment(proxy_array) {
      for(var i=0; i<proxy_array.length; i++){
          handler = '{\n' +
              '    get: function(target, property, receiver) {\n' +
              '        console.log("方法:", "get  ", "对象:", ' +
              '"' + proxy_array[i] + '" ,' +
              '"  属性:", property, ' +
              '"  属性类型:", ' + 'typeof property, ' +
              // '"  属性值:", ' + 'target[property], ' +
              '"  属性值类型:", typeof target[property]);\n' +
              // 'if (typeof target[property] == "undefined"){debugger}' +
              '        return target[property];\n' +
              '    },\n' +
              '    set: function(target, property, value, receiver) {\n' +
              '        console.log("方法:", "set  ", "对象:", ' +
              '"' + proxy_array[i] + '" ,' +
              '"  属性:", property, ' +
              '"  属性类型:", ' + 'typeof property, ' +
              // '"  属性值:", ' + 'target[property], ' +
              '"  属性值类型:", typeof target[property]);\n' +
              '        return Reflect.set(...arguments);\n' +
              '    }\n' +
              '}'
          eval('try{\n' + proxy_array[i] + ';\n'
          + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
          + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
      }
  }


 proxy_array = ['window', 'document', 'location', 'navigator', 'history','screen']





let log_flag = true
function vlog(){
    if (log_flag){
        console.log(...arguments)
    }
}
_null = function (){
    vlog(arguments)
}
vlog("补环境开始")

window = global;
window.top = window;
window.name = ''
window.HTMLFormElement = _null
div = {
    getElementsByTagName:function (arg){
        if (arg==="i"){
            return {length:0}
        }
    }
}
script = {
    0:{},
    1:{}
}
meta = {
    content:'{qq!J7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,map,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipaqqqqqqqqqqqqqqqHE7AsZrs0mBl1erLc64q~Rqje759Mp8e3_euvYW5xB001rMLSiC2BfwzauOuvA1QpOO9H0pdzK2KKi8yRkLkbZRjrEzoKJwHxuN0jPFH2jPubdwMNmNuDIsX2SyoXqJxxiBsbG1hpA_K8qW5qn.Ki5KXyANubn8_wfNYKGJEY9OuFNJNxN005.KLxOOTswM_N9PC8RW.QybDjRKyTCGoc9KNrVulXs8NesO0XK1jzGbubVJtwYMYYNWkA4WYqdQoer1kJBWbTXHVSlhsW0FO7eiO0zRUq.sKpxVuxS8CpFQVmph1Z0IO7NiP9zQUqv1o96FTmUKTREAOEKiDxJVVVVVl2qYOzS3rxCRbyNF2zHRKfwF00Q15fZ6o6R8Jeg066R8JNnCouR87R_XAg0.5sI5WhV2_GhAi5G9LvMaQZQ06uk1wZ0b0U.w8Fe6.ar0l4096k162hsvHBwIVVFUyhfBbU653bPhe.PHc0PlKSPeGQh9JVscFfYp.dh6gKbRO9FxtuXV_Egt0r1r0r4q|vUARfMuJ6toSeI1p_ikRdRkpNiK7uhUTyi1SdsAxZW6Gnwk2xqOYewOS0icwdKKeAJ2VdApNhr6pND1e6QT95ApzHQC9CpGY3FK7EIPSdqfLgoaQRhY91pslIi6qUQPeRWf7pUrJkxYyNYuyGlv9uUpWxWoZjQfaaraW7xpA2oPEnqCVTHc0YrpEthf9UIc98RcVzlA0vtfa1lSgSMGEaEsLex1WzhPaPFc0otrfyI1LZW1G43o06WOrYMTl7lc7Cina8isqPkqJjhSqhITVqqqqqqqqqqqqqqkF7qvxVWtcTlN1KN.ETE0cGztxYqv1uGt8aNdcnRpE99lWQa8c64q`r0;sJEUjK4e8MWZbUPiJLZEj14GotGgv6sNtjazdoFlENVGOKcWi3ZGnctAEENGPsblEWVPvnco3EEyG1cu3WTPjpKQHtlKSGDqctVEuPPuJQyduSieM7lU9ObpEJEPPPm73KZgMPlBE6lfFKmLiD7fxcJZEK3AxCZPl2EQVAyUmlGvAfYTx1L51ay6kcq7JUwkECafwbmTioqfW1J.EUJfsOfJEAgOYPmE3V7g1Pm_3ANeDcYTmDaYKrxbqbEoscfuHmZtwsy0MagKKufFEp7Os1mY3YAgYnlAE0GfVbmpicafM1W6E1ZAFDeTq6W0HU9pir0.m1l7H1G1IqmC8O0ZQvQtEnQfHCl_ik9f8PWPEspfJuGCEUQOt1lS3sqgWnle3VJZEu9yrGyecvG1xfEmDOZMhPZUlfEwMTQKqkGkEYaOrcl83p0gDcmREaWfDClKirVfYPWiEpqAVKeHJrlDzciuh5aQZkvnxBaVTfOuoXE7j6IpEdgfgDoOiiEfLnH2EITfdkOdEMGOgco_3I9gecol3MfdzpUMh7Ak4Ak.cZVwZ1HxH8QG9qv9MyaKnsOlE3VO6noo3QEga1DcEeLf6DoIiJgfvnHrEw9Abb5m8Qyya1B1HJLbPAIJrwW0epCvDNVtgo83E4lfjKDLit7fyciZEFRfNsPGE8lOXnDO3MggB1DH3ImdXqb3o4lM4PXsH3WmjP1sw8aq7kKdM5VKOOPJEQgO2PDE337gPPohEy0ffKDliEQfaci3E3EAaCdciyZFa18fox35aGFYtZr_nqDpt4V7CU8vEgGf9bDpiCaPh1r6EbePFOzNEPLGQPx93bQ4RPxK3PyeHkeqq9WQ3sedtCldRcSfxPawU1pKMcEYwuzCEOQGF1xS3vq4QnEWEmAPsbxJi0GPc1rsE97srDaF8vgypG33t27q8ae6IlAMKrywq2AdmvpXElWPKCxKiTVPmPriE2rPVuz1EfWGJ1Ez3Pa4hnER3bweIaWpEkgGcflPxSgCJrZ18o0xoPWfMD7YHk7dEvGGEcE_3O94JcxTEcZPJCEniulPQPqjEGassKSpqkVyco7lhraflGap8cq0rUgOJa7Bs6ATErLPoDEIiSgPUnqrEf2PDk7ME2AGkcEK3fV4lcEG32Sel1.aiQ760cOoJ4Qr76vpHXfZ6s.gMhqYysBGEjlG5nhO3Bg4d1t5Ei3P5Dh4idLPXnkzEBVszbnBxzQECpMKmzERbodAD5Ge41MerREBfosZEJ0PSKhliZQPGck3E7xPasBQEN0GSnhI3zL4C1h.3NY_us4XDd9zTaUec8LwZpsThh2deaCkMH9YjOXNEXLG7Pt93jQ4NPhvEh9PLKtGi_WPdcc9E.gsdCuGJi0D5cKIq.Q0GpFnDRaN2AtWkt0BdU14ExAPObtJigGPn1csELzPfOXmE73GvPtq3LW4GPtn3zx49OjooEL8b1tU8.a9SPPMcMa7jrCFMW3Y9uX1EzWfw1Jz3Ca_MnWLEUqOFbJNibAOx1mdECQ1ED0gHmQcIafGJK7EpGLOc2qgVf2bqs9iivYcEKZOwCJnivlOWPmjE0SOsuNiEaZfV1Jx30G_1nJT3azy8vzFDVz6McSJ8UZTArREJYgApATYMAZVKkNMESAfscJK3TV_VcWpEV7OVCWXiP0OMPlCEnG1FKTaooed8ufacaZDWA3d8oAFJPqzr1qXQ6VxE13OiDW4iOLO8nlzEuYOJkL6E6qftcWn3ul_kcWZ30ryJfLwEaw6cP0YmnT6tnEHmPWXxDljMYAVqsLQET0frnWI3SL_D1JFEAEOmDWUif3OYnlxESl1VbTxt539_Gvj8dEbuv4GHhENZ6OjIXgijoUAEI9OgKHGiXWOBco9EdyOds.gE49fgnH43d3_e1Ho342yZo4Nhw9x6quNi8LZyn6LiREjTudoMR0VSO.mEg3f6PHq3ZW_aPikEQVO6KHQizZObcoqEeL1bCCHi7WC4co6EdzySkXWHWQCXPtcm4AXgUKIEMqOjbiNijAOy1DdE_wOLOjfE5EfXPiZ34Z_BPii3dR6gr_Q8.7EOc_7E57k_AP3tLgq9UF3MwLVOujiEZZf91ix3gG_PnHlERaOfbimiLqOa1DMEgW16D6xr_AkBsIqhxaUuPMrqhw5.qbshRWE6vKbE37O96SXxK0ZhOyCHDfZFnYjHc75IsS2IDA2RuSpIceLIKf7JcQFFAmOrULRRGwIlvW4snYRQPWhwcY6Hkq5FkSnIol2skaJH2QZs6StxV9ZcOy1HlAJrUE1tK3kwrfqrKLUDSJ3l0lqIppfJoaUmCNzH9EZYoSUxY3ZmuyxHmmZVcYsHDa5JkaXIc02tka3IDAponraialf8f07WG9FisVQqGqH3uaKQbGhH1VgHo95Eua4Ik32JsSCHPgZWoauxsEZQugYHq0JsvEPtrpLlAAVipVVqnqIEkZRESxwRp7psDL0HGVZoUaQxpZZKkgqHrNZD1VVHmV5kuaUIrE2lsaOIm01X1HLoZ3FTCoNrJlx4cUOqdLF4qHhQ.lhgPUfHtE55OuZIHZ2dOndHXlZ5UugxI7Zzk47HH3Jz6h8HHZmNOjB3iebySo1D50IdPHYt8lUfK.uHzaZSvumxQqZGs4MHWJZ6PUwHxg5SOu3IJ72COujIxLsd18xmWaqODk_3IZkuCbIDIEI7cinQBghjnKjHi75Bsn2ItA2NuuGH.GZLvnfxMaZds_vHhZJ5otKxE9Uva8rH87sBp8I3R399pobJRASabj_HNQZO6ntx39ZnO_1HEpZfnKDHWQ5bsnrIEq2GunzIJWVNKbgch9tXDKSFM7wXf5MoggqucbeQ7Qh9cKsH1adwkTXIK09Fk0NH6WeF6TbxDVexOe5HKqWEUJtEbaTpkR5m6Z5ISJORKJ9EGwlFlaKiCzrHCgeQoTuxoEeWueYHVTescpHHAGdVkTtIV99pkT0IAGVAKYXr9gNDazyJl9gFSNrrTGy8nJVQaatK1pVHpVdsuTUIYE9Vs01H0Leho0BxcgeMuZSH19WFvWcHANGkuaAEcLy8rq3WoLZqD3_RGQGQD7EHnleiU0gxk7ewkZ7HsReJ1AaHUldtu0uIAg9ks0dIVlUUKllRqrdkGVtosJNHOgkWT7dDO7HQTVtoPAwHYgdrO03Ip79DOTMHa0emU0VxrQeVkZEHpEWV6HDme7UgDs_DJVwuSHKiMqagcvdWJ0ajKBUHdGegv6fxHaeBsdvHIee5PsyHMLdgO60IIQ9eO6DIMgU_kk6DZ3I9CIMoRq9na_tiQ0w9aHKQyEtSnsDH3QdCs6rIQq9auCQHZAe6v6wxJGebsdkHw7W2oH5ELai4SOKJHWd0aI7xjGljKiUtMQaybX8H4Wej6CbxtVeyO55HFreLn1PH8WdNsCeIMa9BuCxIIQRfuPccH3V_CtNq.E5BSFQoL2dzk5fQe7tOc1HHQGd9kCtI399fk6mHyZef6CcxEleaO5FHRaW6Ui_r3QC2bF1xylNBf5sJt0gGr8wl_aA6CX2HgL5MoyBxCg5huSSHb25Fcw.HPAZIkybIbVv3kyAIPaFKAz_o1VkRGRRmnTjEGYnmvYOMcx8Qcqxw1waHOlZFuyuI9gvssgiHm351oyhx0L5cuSwH9VHrvrOco7tIkawJoZPAsfNEaW_QPxJr03umDf7Hl05YUyVxTQ5lkSEH2x5V1Q7Hb0ZJugBIPLvtsgMIbVFhulpDPwGipV.c6VvcfAxoPWgoqAsQD9xiPQyHvLZEOg0IOQvJOy6Hc95WUgaxuW5skaVHGgHs6q7iOqrmuJ1m10fWaqQrYE4hSQOFnqYsKG.HqA5ovgwxSG5KsakHfz5mPQYH23ZkOgAIfWvlOgPIjEF4boNkMlV_A.7tJQT0rFdRzWVnkvWQh3xgnIPHjWZys4eIBavdu_gHiq55v4yxdA5zsuBHBQH7okYxJ9e_rI73Hgr_chqHHEbguMSxzZuPbOnHJZ5S64cxZl5GOuFHzS56nI8HNZZas4RIzGvCu42IN7MyAOFq5LSZrvuHiqUeDj1F_Z42Gt2QHZxjc8.HXAZBk_bIjVvLk4fHh75L6_5x405dOnbH.GH5UcIHFr27bjzJ.Vs_udXHxqL.OcyRE9saCPyHx35Po_hxgL5nunwHLY5fc8oH7qZbk_cILlvvk_7Izq3SKiSiFYffOcIlWyZapucH_04vG8_QWAx91R7Hn0ewueBICLbFsZjHUEdRoevxb3dxuTyHCliEvmmqTlUIqYbHvGxxAmpJ2gP3KzWmblniD2qHK9dQUeaxvWdkkTVH0yds1REHa9eVuehI03bpse6Ia9RsOZQD0VdpufBx63RwPr5tGl3Mu2oQA0EYPRYHS3esOeAITWbVOZsHsVdhUZ7xPZdFk0aHnLiF6lkROlK8o05E6VTEuZzrp7KHcAAHCVPQK9HH1qdivZyxOAdws0BHuwdWP3SH6EetOZWIaZbkOZ5I033UcqIt1EOin3iJrErksgRHq9mhk38QVLEon38HTZeqsZRISGbDueVHAadmvZYxfqdVs0hHSWi.ootlwlSTo6MRelaaSO93eQK0p6oJZQ1.bvKHI7dg6d5xB0dBO6bHdfd5nM_H47e4sdTIdAbeudrI4ZIjOhvDyA5CSdEEyW3eChPm8g86SORQRWEScMoHgqeCkdcIZlb6k5wHQQd66dFxz9dbO6cHeAi2UoCWJV9euIzIwzjdGISHBq6.O4CiE9PyCbwHMEdNo5vxj3dyuCyH_mdLcFOHdaeNk55I40bXk5EIdAwgnjXxyQIgn1hlMz9Of5xHiLVGb1AQwGEO1FEHZ9e9u5hIg3bfsdDHRgdGo5kxLEdauCmHy0i6vDeqQJeCSX6m4lDBSDeIMETnCcDm3AP6Db9ivVgMUf7EKZgtkNaiDNgF1m9icV_Iufv8DEf3sfs8c0MQSYKJULq8PSrxO7TxOyScC7c3pYwwPlHQPmSikE_FOfW8lZfsOGHi2lg1UfEEV7grkNQil3xr6ROiVauYCxwJ6ZqKfmumT9gIs7Mr0g2mKyOi9agYvfYEYqglsNhimJghPlziDg_JOGL8c7ftOGF8DLlqSNgrc0MxawyxUzPrpGNhrQIES01wbgHinl_io7_hsGT8kAfJufaiPGgWvGSEAagssLUiqZx1o3TkqTzVO9mo0Qvq10_HaqRDrEyrG3YVbgjiGQgo6GFEp9gKOLcirpgmnlKimQ_csGp8rqfluOw8tWlCkUvR7EbZu4GEwZfn1IsxwgwXn4Jw.QHgcoOiha_ykO58H0f5kPyiXWg56OCEIVgzO.XiHqx7UMixiGTgGhxRX9wSuMDiHadeABH3e0TPC4SizggaoOkEQEgGu.miJTg6coIixG_akOF8J9fTkO98xGmduo1xwg5dSU8WFzvNbsSxjz__f_cwBaHj1D9iiV_BuPv8tEfLsOPi.LgBoPdEMggdujfih9x5vFDDhWlvauXEFaOOfKTRRZo7uPYWwVTaD_giNlgPUPEE37gSkjQiERgf1DqiWl_buPk8xgfvsPB8JlDaPcHk.pbzp_vlFlCjnt3m_9W2Ktyw7ViMPrzi1g4wO2L8K7GFO9.i60yRU29EDQyEkzgiKEEE6wkoK38EKSIJTlORDSTrTzO1SNkholViKeoiCGyQv2SElaykszUiVey1PrxiAL4VO2l8VQGpO2C8AgD31rOiCqoRSzMWYLkVKpWkmqgsrfKwaEiYnrKipQ41s2p8YqGVu27iuAyhv9zEcGyFs7ui17ERoQFrn3SIOEYis9ZoaxeqAGyxu9_DAQVwbZiinWyi69CEkVywO7XisryWnqniUW4ms9J8AaGku9y8VQDJ1QYDraHEfq9H1Q8tfLEWS7rrAlSw07iocqIiYG4qk9F8p9Gmk2YiaZym691ErlyVO7ti8aE.UIpq5LkBcotcz92SsBFq.0_yPkIEe39.CdYidLydovdEHgyBuBfiI2y5ck4iMA44kvC8IVGZkvq8Mar6Ok0MRqw0Pd2xH0ZTnIHm5m7baHXwyqiS1kqi3l4Cuvk8wgG6sb8iZ3yCovMEJLybuBJiwVE2vIBo8ZwdnH7EiYG9uclc.Q3GktfkdA0yD5Qi40yNUb9EtQygkXgiFxyL1cZiI04Nubd8MLGXsbh8IVrfajaJ_gKzshN3M99brnYqN9_LPnswe9iPPcxiQL49Obl83QGfOvoiy9yGUbqEEWy6kXliRgE668fqLaVSO6oi40ezr5IkygdvajTog396KSMioA_MvNzECG_tsfuibz_RPJ2iP3gIONG8bWO3ON18OEkQaZvml2PMk9zDnZDMPmiMvSOKsyQwc3JQnJniOWgYsNJ89aOsuLEimq_1vNxE0A_rsfIi9QhqopgWbJXofyCDv0MwqYeEllW8qwOqaqUDbSPilZ_Y6N1ETl_lOftiPS_hnWXibZgWsLN8PGOtuLY8b7kHcWtDnWSrc3RWGTOWbVfJq7eqvGswDZJicW4ivAghkLC8OVOWkNSic7_W6LiEa0_sOGKiGGh1UAaJuQmHqVHkf0fxcqMrqqVisQbWr7UVCaNiq3_DoLMESL_KuGJifY_mcWUi2qgckL18flO4k.Q8jqqesvTHX046C_umiZ84kdblXGs_GuWwhAJg1HZi.0gyu.d8BLO5sj_iiE_eo.6Ed3_zuONiBlh7vsERHQAgDoYx8xO6DM9Wdyf2fs9E80UPDuaiJ9_aU.qEZW_vkOlizy_61H3iN9gau.M8z3OTs.v8N9rOSkJxL9R5PKyqHWU7r_MMLgfbO56wH0JNPi2iX3gBOjG8jWOLO.OitV_BUjZE4Z_5kPGi.Lh561HW3lnBsPIl.l_ZuX6R3QrzA_GWwl6aKndixq_PvjxEgA_SsPIiLw_GPiri7EgbOjQ8NZOvOjX8z3i7G8QERWr7KiilM9GL1iLmFyGna5iwsLWMnxXinZyQszN8CGPFu79iUa4Rvz2Ebq4Es24iCWtHoYxoogwIaR5DK0w3KwZE2xX8CgzrlAAHbTDiK74Q6ziE904kO2Ki0f41nxtia7yUszm80APpuzS8aZH1fNQ8AEGISrYM67e8bgqJby93CJywAWWYcxUiSqy1kz18TlPhkzzisQ4h67jEP94FO9ninAtRUVsoUa4I130xPZRosmbmoZcxq03rp3AwC0Ji1E4Jo76EO34wu9Nium4WcEui0aymk7i8a0Pck7g80AikbAcDSlExal83GEOxrZBisGpWOZCwVGWo1E3iT9yqu7M8S3PmszKiAg4lo7sEfE4VuvTi50t.vUFHHVQebdSlt9oyDd2H53J_Ak0EXlK.D6Vi8V4dUBZEBZ4XkvGidN451h0i4Vy4uB68dEPZsBk840J4s6bEXLsnrM1H5lu2ahlJ7Zu_q6.wRlWaPhrigEyCOBQ8eZP6OXIiQl4CUB3Ez742kvWie3t26UbE7LzOck6MNwyGqDD3t7QvrKr3hVbyKCsiMa4NvX2Ejq4gsb4i_J4BPteidgyNOXg847PXOXt8dLEBnkOoL9ABftj3.SyzCi6l3gl2Pt1wwgWPnttiZ7yvsXm8gAPfuBqiRG4GvXrENa46sboiyZtCoKV8RLg9CsxqEGBOcciWQ9ROSje3.QNEbxFJvQ0M6pjhK90tORnJDp0RnTbJcQC8spfwDqz3upJwkW_Kkyflm3AI6R2h0laFDgXlKLBtoRz8PQkQcTuJqaCYkpiwl0z1kAxJ2W016pDhVV0rOR8JlqmqUNWhpNfYkYZJUlHUkeit2QhsbTJivVIDCxfJ9g0VopshYE0lu3TJcT0hc0BJDGCWkAjwc9zxkAVwDG4Qu9IrnELcnEDEcVytDgFca27kq908baki100JoVChuA6wkEzWspnJPL0koAHhAg0su3pJq9m1vLlqsGNEblJt1WNqrghEGASmfW3MO9RVDELJGl0DUA3hp70Yk3WJrR0m10AJmlCcuAswigz4ssIwtl4dr.ak5lYTG6kH7aaND6gEW0j6rvx8.VkdP6eJhgCyOsgwH7z5O14JX00eUs0hIQ07kMLJHEm76.lMd7CyO_Vt79uesiIJwEyZqodFe9NPKh6JzG0avsrhwa0vsMoJJe0CP6RJxLCaOsVwJQzTOsbwxgZesMHlXQfGa8CDRLWGOiHhIVJ7O5C8BEkNnCbJiQCXs1fwtqzLusZJjA0Bv1ehMG05sFOJh7meojelRGNbf5Ii.3XOkhvmF96zr_fm.QRSbt5JNW0P61Dh3V0SOF8JEr0GnCcJWWCfs1wwxazvu1NwJQZOkFJlLGG2kMxD.VqfbjFojQ62Oer8u7cMcSBJ1G6QkYjwK97RkV2J6ZTR6YPhDlTEOw_JUalHUz6DmqT31TqDb3aMSzcDTgIJq3Bhv78HCJmJCLTsoYHhlgTkuwpJV2T1cShJAA6UkYDwVV7AkYawAaZIpxw3lRNIuTMM2W_kKSZHlqSF1f38aqcY1SAJpl61uYsw1g7hsYXJu3TtoV.hcLTFuQeJ1VlRv7XkAgDtsgp31WDirZnMKQ_RAf_qSWLwDWWJn0TJUV0hkQTQkQLJsxTW1aWJV06muVHwAL7csV4wVVdhqZkMqwXkSgjhfghxrNrqVp.DuZs809cDPaRJYL6qOVVwpQ7mOYUJa9TlUVAhrWT.kI0J8gl.6BPqIEJTD.urBLI4SO8HIWp_DkvM7LL.KHhJ5ATdvUehHGTXsIOJIzTePuTJM364OUawIW7ZOUcw3EddOtMq5qieKu1tiVeTunFlyL_gs6F8y3canucJ3W6SsUwwwa76uK3JZqTCvURhJAT2sIHJwQl9oBMtQNGCOPltEg0fbPWkLaYfC_tiNG3_bi1J4ZTN6KPhtlTgO8_JMSTBnn5JIZ6LsKywMG7XuKmwI7djp4NkhYX9S8Dctw6jroAl_pNNSP28eZcPcnhJQA6vkKDw3V7GkUrJy7TG6K8hx0T6O8DJRGlCUX8FN0_BucWiywLXq__DWLUNfnoJlEMECrRJo3CFoR.hCLCtupeJbYCRcevJPq08kRPwblBIkRWwOqnUcf5WoaERPNDMmaeEpSkH2LLspx78cArQ1eWJG00YuRHw9LB1s3tJmECpoRoh03CrupRJ9loqvfoq6xzwumbEa31ASJKlTqtMuzMk2AMDDrGJl9CVURAhTWCMkA0JPyCh1ZLJb90Wu3.wP3Bxs3Uwb9nJUpOWp7JEcNLkcQqiOqVlS9AEGVp8D0rJPZTJv30hO3awOWBWORuJrVCkU3WhaZC1kAAJGLo16GrlaAhDb9icPqjJpacHPEzHCfxoq3MVKqBJqqCDv3RhSACYsAHJfwClPZpJ2E0cOM7wXZB4OM8wj3aTp6qHdWBapOgEBET4sdoqHLQ5uki8tLrdnd5J.Z0gsMywBGB5uF0JiaCevMThdqC7ss.JBWoOoOhc7NPSKjKoyaE4cO0h5ZIgGBsiR9.ObkCJJ7Ca6M8he0CvOsDJzfCCndFJN70usMYwzABTuMfwNZa_puLoL0ijCnMlFq6GCnKDtLpBPXx8HWrNc5vJXq0XkFPwjlBBkMeJtQCB6F_h49C5O1PJ.AoeUPSl5ZNbbi3lx2PNOXxW_7c.pO1WNVMSCceJxECfoFohg3CSu1RJLmCGc5kJza0fkF8wN0BbkFLwzASBPcAD3qmGCPZlNzL7C6Aowl0QO2q8sGqM1yLJn9TQuw.wC3XRsQbJUg63owOhbE6EuY2J60DHv2glVx.wkpqmb3Stbzhh0GBYuWnFmqQHDmlJYV6sUwWh9Z6ckYAJ0N611ylJaVTUuwow0EXAswuwa0aRqlrlDwXY1TDH67AIkTal2lu1kwM8AlqVPypJSET1OQ7wnZXhOwBJsl6tUQLhP76RkVZJn3DR69Go1QtcP9hMkLrqalrlCJzWffGhfV_wKlkJ1a6JvQThOq6QsV.JuJ6kPgJJ0gTmOQEwa7XcOQ_w0LTHnlPHraeqrq9JAaTED7IkpLTJsVc8VgqDngFJT7TksQYwSAXmuwAJAG6lvQphXa6.sU6J5ZDjovjMdaFZ1H1tQwTBfHvHHGA6cOQcdZQ7botJ8Q6d6I_hB96XOUPJdp6en4CJ4QT_sISwdqXZuIewgW0bfoUtX7.uk4JlWER9qhbix0nnpMz8RQqac4kJyaTSkI8we0XCk8RJQW6C6IKhzV62OUiJeqD9Uvp3BEKGftXq4El9DitktLPjuM5Ftl__CDpJMg6Lo8OhjE6guK2J4T6Bc_dJdGTLk8_w49Xzk8lwdG0PKX1E8ZpNbjzM.WOGSF9JtlpvO5V8waqP1_lJZVTvu8owgEXGsIcJRL6vo8IhNg66uKrJy9DCvb3qLaRnnPEFM3a7qotEMWXu1TmWv3MEDR3WvlaFUrLtK7axkxZWDRaR12GWcln8urOQogNIsrHQkluI1RmD2ANYswol6Y9UPLLq6qp8qfRIPVosP2JWqgnYOrEQl7N1OqhW20apUrltVQaqkx3WlErq6yIxDGEVpewxA3j3pNyoAZ1AGfiDoaeDKRvW9GaVvrpt1aaMsE6WceatP9NWDLnWOq9QcQNxOqKQDg7cA7UMp0VqfGeqaWt3n9_QfqI31AbIbEoJn9CWoQntsqSQkqNWurWWfAakvqJtAGa1sEsWq7rpog3xG0xxPVlFnNNisGitOARck7bWcaeYb3XWGWaD6qKtpVaYOEiWrraln91WmWneskzQiaN4ukRQtQX6n.CF7A7Zkdzt7AELGOwm8JzSPdUIj7odcvdWhGngkk_QH9NekcTWXZae6kntIla7OhjWWarOU4pFz9RnfstWJZ6upOJMiYn6fdwlz9eOCMTWzLa6okItwgavuhrWJ2aCcvMWxAnukkKQJVN0kkGQxaB0GnWJyGBNs8RkHSj7a_6q_quGOPiIBqoN1bGWilnXucOQhgNBsk5Wj3aXoc4tMLa5utzWhVrev_Lt_RN.SK9og77NCn.rFGD0GFDhF7wSDFZWN0afUclt3Qaakt3WExaG1bQWJ0nfucIQxLNbsc.QJVLjO4iHjzNbotLt4Wp.b_YhoLLFufOIu9DFPfNW1LuQOm9QKQLROlvW69S3UmGtDWSHkJ9WUgqH6eGJlA7RcQ2Jo0vpb25HvWjI1LXMC0ZHKw4WTASsvmJtlGScsJsWVzSpPfmWA3uUOmqQVWLAOmnQpEL8AaQmYEW8nYzD6LcqCfprqyu1KNZIa3DVnf1WpWuJslzQ1aLhumLWuqStvlNtcASRsWdW1Qq3oZglSGYkGZNipGcJffGFAV_q12PmsqZ8bQcWnZSJ6lntklSQOWjWASSknGiWVZulslxQAGLculTQV7LosysMcmzhDafrSNLqqGDr1WuDcauI0ZDDcGMWYAukklKQpVLlkmpWa7Sl6oXti0S.OHCW8GqjUdacZ7LdusHMzZi5OolJ.9A_rhvtz7Q7CIxW53S5oo4tHLSXuHzWIYSecO6WMqu_konQIlLukoZQ3qj5SMJodQF2rBnDZW1yO49Jyfuguv7IyADa1OQWR0uSuoIQwLLCsDFWZESTooUtJ3S2uHxWwlq9vdEx3EJ.aboMdru9PbFiNWvesHex_LQ_D8AW49SLUDGttWSdki9WMySB1PgWI9uLuD4QM3LzsDoQI92jq_CFRRBNa_VWgEd9KuJk.QoLk1vIe0DfPPmWQ3uvODqQ3WLGOokWgVSvUDQtxZSCkiqWRLqC65rQZ9RPuiOoyLCNpcdRhLtWap4M0AREKpIWoqnFvxNtCAnxsrdWbwn3PzfWPEa8OxZQvZ.IOxiQO3vpkwOhDxvQbSDmlg6Vbw7kcVXxaN5IrLmsnziWGZaVsxxQ9G.1uElWmanpvxmt0qnqsrMW9WkooShklfLqKR9FUrNVbfyFS34kcNIMCGIobpbWl7nV6EXtn0nMOqCWPfntn7jWb7aHsE2QPA.xuEpEClaiuEOqTLD87f809r1hvHos295V7MWt1083179040r0Yr1DZfZ2zrwHu_GVGCaexHqVHKZWKq2rk9VipAykcVEir7r0',
    getAttribute:function (arg){
           vlog("meta.getAttribute",arguments)
        if (arg==="r"){
            return "m"
        }
    },
    parentNode:{
        removeChild:_null
    }
}

Document = function Document(){}
Document.prototype = {
    createElement:function (arg){
        vlog("createElement",arguments)
        if(arg==="div"){
            return div
        }
        if(arg==="form"){
            return {}
        }
    },
    appendChild:_null,
    removeChild:_null,
    getElementsByTagName:function (arg){
        vlog("getElementsByTagName",arguments)
        if (arg==="script"){
            return script
        }
        if(arg==="meta"){
            return [meta,meta]
        }
        if (arg==="base"){
            return {}
        }
    },
    getElementById: _null,
    addEventListener:_null,
    attachEvent :undefined,
    visibilityState:'visible',
    getAttribute:function (arg){
        vlog("getAttribute",arguments)
        if (arg==="script"){
            return script
        }
        if(arg==="meta"){
            return [meta,meta]
        }
        if (arg==="base"){
            return {}
        }

      return {}
    },
}
window.document = new Document;
window.document.scripts = script
window.document.documentElement = {
    attachEvent : function (arg){
        vlog("documentElement.attachEvent",arguments)
      return {}
    },
addEventListener:function (arg){
        vlog("documentElement.addEventListener",arguments)
      return {}
    }
}
Object.setPrototypeOf(document,Document.prototype)

Location = function (){};
Location.prototype = {
    "ancestorOrigins": {},
    "href": "https://sugh.szu.edu.cn/Html/News/Columns/7/2.html",
    "origin": "https://sugh.szu.edu.cn",
    "protocol": "https:",
    "host": "sugh.szu.edu.cn",
    "hostname": "sugh.szu.edu.cn",
    "port": "",
    "pathname": "/Html/News/Columns/7/2.html",
    "search": "",
    "hash": ""
}
window.location = new Location;

window.addEventListener = _null
window.attachEvent = undefined

Navigator = function Navigator(){}
Navigator.prototype = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    webdriver:false,
    connection:{}
}
window.navigator = {}
window.navigator.__proto__ = Navigator.prototype


setTimeout = _null
setInterval = _null

window.XMLHttpRequest = {}
window.localStorage = {}
window.sessionStorage = {}
window.HTMLAnchorElement = _null

vlog("补环境结束")
get_enviroment(proxy_array)


require('./ts_code')




!(function(){var _$_W=16,_$xe=[[12,3,8,1,8,0,7,15,7,12,0,0,9,6,13,15,4],[28,25,112,21,63,21,71,124,8,124,88,60,89,124,0,64,25,79,74,121,87,7,33,94,43,38,0,124,34,47,6,78,70,31,35,113,103,49,31,57,1,46,42,66,31,18,101,107,29,41,31,48,29,64,26,105,27,106,1,31,37,54,31,114,47,97,7,124,83,35,49,97,81,3,118,45,97,124,84,127,29,80,86,65,93,112,124,88,24,115,5,68,55,2,76,97,59,111,53,111,70,99,36,90,44,110,67,9,96,4,119,51,108,120,64,117,122,119,64,50,101,30,1,4,73,60,108,90,51,29,71,103,51,21,39,98,0,103,64,48,6,48,49,32,109,22,67,31,90,91,51,104,100,102,15,84,99,4,111,93,57,67,46,79,3,17,103,29,21,39,114,20,43,119,117,106,23,64,4,105,47,63,98,34,71,90,94,12,18,53,58,68,124],[3,16,10,7,4,26,19,5,30,27,16,15,22,15,24,19,8,21,13,23,12,3,28,31,32,1,42,3,32,29,32,25,6,32,33,32,18,2,6,25,2,25,20],[29,2,20,40,25,8,12,10,18,38,58,9,6,23,31,23,24,39,28,29,7,46,34,43,31,19,19,24,1,0,45,19,57,32,2,5,41,33,50,5,35,11,27,11,36,51,31,6,12,51,28,14,27,39,15,46,47,17,57,4,14,36,8,0,30,33,38],[15,3,3,45,1,43,34,14,27,3,5,23,35,3,13,16,43,28,43,2,4,30,24,25,30,26,2,11,37,42,17,44,28,18,19,10,22,34,12,21,5,20,3,19,3,6,38,18,32,14,0,36,39,27]];function _$1o(_$H7,_$uB){return _$13[_$Yy[20]].abs(_$H7)%_$uB;}function _$bu(_$H7){var _$ap=_$H7.length;var _$W3,_$_W=new _$ZL(_$ap-1),_$hP=_$H7.charCodeAt(0)-97;for(var _$nk=0,_$hL=1;_$hL<_$ap; ++_$hL){_$W3=_$H7.charCodeAt(_$hL);if(_$W3>=40&&_$W3<92){_$W3+=_$hP;if(_$W3>=92)_$W3=_$W3-52;}else if(_$W3>=97&&_$W3<127){_$W3+=_$hP;if(_$W3>=127)_$W3=_$W3-30;}_$_W[_$nk++ ]=_$W3;}return _$9u.apply(null,_$_W);}function _$hP(_$H7){var _$ap=_$9u(96);var _$W3=_$bu(_$H7).split(_$ap);for(var _$_W=0;_$_W<_$W3.length;_$_W++ ){_$Ge.push(Number(_$W3[_$_W]));}}function _$Im(_$H7){var _$ap=_$9u(96);_$Yy=_$bu(_$H7).split(_$ap);}function _$oE(_$t1){_$t1[4]=_$Gf(_$t1);var _$Sg=_$hZ(_$t1);var _$Sg=_$ZK();_$t1[_$1o(_$UV()-_$t1[_$1o(_$9h(),16)],16)]=_$t1[_$1o(_$Qc()+_$h2(),16)];return _$d0(_$t1);}function _$Gf(_$t1){_$t1[0]=_$f2();if(_$UV()){_$t1[_$1o(_$9h(),16)]=_$DR();}_$5f(_$t1);_$t1[5]=_$sE();return _$8s();}function _$f2(){return 14}function _$UV(){return 5}function _$9h(){return 8}function _$DR(){return 6}function _$Mm(){return 2}function _$5f(_$t1){_$t1[_$1o(_$Hd(),16)]=_$UV();_$t1[_$1o(_$9h(),16)]=_$DR();var _$s$=_$h2();var _$Sg=_$ZK();return _$Hd();}function _$Hd(){return 15}function _$h2(){return 3}function _$ZK(){return 9}function _$sE(){return 11}function _$8s(){return 1}function _$hZ(_$t1){var _$Sg=_$Hd();var _$s$=_$UV();_$t1[11]=_$8s();_$t1[7]=_$Qc();return _$h2();}function _$Qc(){return 13}function _$d0(_$t1){_$t1[12]=_$uv(_$t1);_$fN(_$t1);if(_$t1[_$1o(_$9h(),16)]){_$t1[6]=_$AR();}_$h0(_$t1);var _$s$=_$UV();if(_$t1[_$1o(_$Uy(),16)]){var _$s$=_$sE();}return _$Qc();}function _$uv(_$t1){_$t1[_$1o(_$8s(),16)]=_$o7();_$t1[_$1o(_$Mm(),16)]=_$Uy();var _$s$=_$UV();var _$Sg=_$sE();return _$8s();}function _$o7(){return 7}function _$Uy(){return 0}function _$fN(_$t1){var _$Sg=_$Hd();if(_$Mm()){var _$ap=_$UV();}_$t1[7]=_$Qc();var _$ap=_$ZK();return _$t1[_$1o(_$a6(),16)];}function _$a6(){return 12}function _$AR(){return 4}function _$Jq(_$t1){var _$s$=_$Hd();var _$Sg=_$UV();_$t1[11]=_$8s();var _$Sg=_$Mm();var _$s$=_$Uy();return _$f2();}function _$h0(_$t1){_$0W(_$t1);var _$ap=_$f2();if(_$8s()){_$t1[7]=_$Qc();}_$t1[10]=_$9h();var _$ap=_$Qc();var _$Sg=_$h2();var _$ap=_$a6();var _$s$=_$B$();return _$8s()+_$o7();}function _$0W(_$t1){_$t1[8]=_$DR();_$t1[_$1o(_$Qc(),16)]=_$h2();_$t1[_$1o(_$f2(),16)]=_$a6();return _$B$();}function _$B$(){return 10}var _$oE,_$Ge,_$mD,_$ns,_$Yy,_$WV,_$sU,_$ZL,_$96,_$9u,_$qH,_$13;var _$hL,_$nk,_$f6=_$_W,_$W3=_$xe[0];while(1){_$nk=_$W3[_$f6++];if(_$nk+33<37){if(53===_$nk+51){_$ZL=Array;}else if(57-_$nk===56){_$hL= !_$WV;}else if(-35===-35+_$nk){_$sU=[_$Ge[8],_$Ge[13],_$Ge[5],_$Ge[3],_$Ge[12],_$Ge[11],_$Ge[10],_$Ge[4]];}else{return;}}else if(_$nk+100>103&&672>84*_$nk){if(96===_$nk+90){_$f6+=-4;}else if(124-_$nk===119){_$Yy=[],_$Ge=[],_$9u=String.fromCharCode;}else if(-101===-105+_$nk){_$1i(187);_$f6=0;}else{_$WV=_$13[_$Yy[17]]={};}}else if(595<85*_$nk&&103+_$nk<115){if(100===_$nk+90){_$hP('m+`YZXXX`Z)Z`Z)*`*))[*`*(`UZY-`Z))`(`YXX`Y*[,(`(X-*`YXZ(`Y*`XV)`ZY-`Z)[`Z)(`Z`YZ,`Z)Y`[Z');}else if(120-_$nk===111){_$f6+=4;}else if(-99===-107+_$nk){if( !_$hL)_$f6+=1;}else{_$WV=_$13[_$Yy[17]];}}else{if(37===_$nk+25){_$1i(0);}else if(40-_$nk===27){_$13=window,_$qH=String,_$ZL=Array,_$ns=document,_$96=Date;}else{_$Im('n+*w+W,Z`tyre6buv4g`p`eraub~`S`0`fhsfge`Pn`pv}fv zwO`vir}`bcva`pv}fvn`hafyzwg`N`0$_gfUrvsz.`vkvtFtezcg`w}bbe`$_gf`sevr|.`tr}}`@rgy`zwO`web~6yre6buv`x`N\\e\\a\\f]`ire `RR].`whatgzbavir}OPnNargzivtbuv]p`POP.`xvgGz~v`-`Urcc}lOgyzfS`K@?;ggcEvdhvfg`OPnire `evrulFgrgv`].4eerlUcebgbglcvUchfyUrcc}lO`evc}rtv`trfv `baevrulfgrgvtyraxv`rvsz`4tgzivKBs{vtg`evfcbafvGvkg`Srexh~vagfP.evghea `O`gbFgezax`whatgzba `OwhatgzbaOPnire `jyz}vOXPn`ftezcgf`0$_gfUft{S`fjzgtyO`@ztebfbwgUK@?;GGC`/`.`fvau`fc}zg');}}}function _$1i(_$Sg,_$H7){function _$O4(){var _$hP=_$ps[_$Yy[1]](_$MT++ ),_$Im;if(_$hP<_$Ge[19]){return _$hP;}else if(_$hP<_$Ge[20]){return _$hP-_$Ge[21];}else if(_$hP===_$Ge[20]){return 0;}else if(_$hP===_$Ge[17]){_$hP=_$ps[_$Yy[1]](_$MT++ );if(_$hP>=_$Ge[19])_$hP-=_$Ge[21];_$Im=_$ps[_$Yy[1]](_$MT++ );if(_$Im>=_$Ge[19])_$Im-=_$Ge[21];return _$hP*_$Ge[15]+_$Im;}else if(_$hP===_$Ge[7]){_$hP=_$ps[_$Yy[1]](_$MT++ );if(_$hP>=_$Ge[19])_$hP-=_$Ge[21];_$Im=_$ps[_$Yy[1]](_$MT++ );if(_$Im>=_$Ge[19])_$Im-=_$Ge[21];_$hP=_$hP*_$Ge[15]*_$Ge[15]+_$Im*_$Ge[15];_$Im=_$ps[_$Yy[1]](_$MT++ );if(_$Im>=_$Ge[19])_$Im-=_$Ge[21];return _$hP+_$Im;}else if(_$hP===_$Ge[2]){_$Im=_$ps[_$Yy[1]](_$MT++ );if(_$Im>=_$Ge[19])_$Im-=_$Ge[21];return -_$Im;}else if(_$hP===_$Ge[16]){_$hP=_$ps[_$Yy[1]](_$MT++ );if(_$hP>=_$Ge[19])_$hP-=_$Ge[21];_$Im=_$ps[_$Yy[1]](_$MT++ );if(_$Im>=_$Ge[19])_$Im-=_$Ge[21];return _$hP*_$Ge[6]-_$Im;}else{}}var _$nk,_$W3,_$t1,_$_$,_$0C,_$ap,_$_U,_$po,_$ps,_$MT,_$0m,_$L7,_$IA,_$Im,_$hP,_$1o,_$_W,_$f6,_$hL,_$px;var _$Gf,_$UV,_$s$=_$Sg,_$9h=_$xe[1];while(1){_$UV=_$9h[_$s$++];if(_$UV+127<191){if(_$UV+4<20){if(_$UV+59<63){if(53===_$UV+51){return 0;}else if(36-_$UV===35){_$H7._$$0="_$UP";}else if(-59===-59+_$UV){var _$hL=_$O4();}else{_$H7._$4w="_$69";}}else if(_$UV+98>101&&136>17*_$UV){if(81===_$UV+75){_$WV._$Qh=1;}else if(59-_$UV===54){_$H7._$cG="_$Jx";}else if(-59===-63+_$UV){return 5;}else{_$WV[_$Yy[0]]=_$mD;}}else if(287<41*_$UV&&58+_$UV<70){if(17===_$UV+7){_$WV._$L9=_$1i(8)-_$ap;}else if(85-_$UV===76){return new _$96()[_$Yy[29]]();}else if(-54===-62+_$UV){_$H7._$iL="2dEQKAuUsf4c2RPFXs051q";}else{return _$1i(10,_$ap);}}else{if(72===_$UV+58){_$H7._$46="_$vu";}else if(15-_$UV===2){_$ap+="H$x2ozjvB29xTjr4KRlk9QMFKIa_EIc7IqcziEpHtiVJrkw4w73Tf3QPsKBluSkWuZA8XE9$fhjjc0rM$njt1nAEbQuCHYY0fMujLNbhlzJvDDA36WyQ5XiIdvUJZUfFk7exuroIaiYU8m7ZYxgVg1iYtBgZDAcQUdnT31L6cZeATNtI10KFZI9pL$M";}else if(-85===-97+_$UV){_$nk=[];}else{return Math.abs(arguments[1]) % 16;}}}else if(_$UV+103>118&&512>16*_$UV){if(101<86+_$UV&&_$UV+110<130){if(108===_$UV+90){for(_$t1=0;_$t1<16;_$t1++)_$nk[_$t1]=1;}else if(47-_$UV===30){return 13;}else if(-68===-84+_$UV){_$ap+="uIoEGemDnsbuYyWVsUZL969uqH13H7uBO4_V_UpopsMT0mL7IAhquo7sK25j47t4Z5NW9MZkoePVrGtYrIRj3YdLKvZmNNqBUAOnNExeCv1i4BjsdaImhP1o_Wf6hLpxnkW3t1_$0CapSgs$Gff2UV9hDRMm5fHdh2ZKsE8shZQcd0uvo7UyfNa6AR";}else{_$Im=_$O4();}}else if(_$UV+36>55&&2520>105*_$UV){if(66===_$UV+44){return 11;}else if(26-_$UV===5){_$WV._$gx=_$1i(98);}else if(-77===-97+_$UV){if( !_$Gf)_$s$+=2;}else{return _$1i(159);}}else if(1771<77*_$UV&&114+_$UV<142){if(78===_$UV+52){_$f6.push(_$Yy[28]);}else if(11-_$UV===-14){_$H7._$gH=25;}else if(-11===-35+_$UV){_$1i(87,_$WV);}else{for(_$px=0;_$px<_$Im;_$px++ ){_$4B(16,_$px,_$f6);}}}else{if(85===_$UV+55){}else if(83-_$UV===54){return _$1i(173,_$H7);}else if(-8===-36+_$UV){var _$f6=[];}else{_$s$+=1;}}}else if(1612<52*_$UV&&47+_$UV<95){if(75<44+_$UV&&_$UV+30<66){if(155===_$UV+121){var _$L7=_$WV[_$Yy[39]]=[];}else if(127-_$UV===94){var _$0m=_$O4();}else if(5===-27+_$UV){_$ap+="AGb8pAUb6kcbB$dTxT583sjaa27sPfK05q0emkt4orLvxXBGYW2Dq$7KzF29WOq_aRRZt$5EYsAsxei0BlRYlAwxaUs1WeE5b7IS2FEz5zzpnDF35FfdBRu6mOxuwz32GaP0dx4$lm47KPdxXYn$ucbvln_pBAni5s6z_ow8WT41f5CHO71_QM6hw";}else{var _$ap=_$1i(8);}}else if(_$UV+113>148&&3800>95*_$UV){if(154===_$UV+116){_$Gf=_$1o-_$ap>_$Ge[1];}else if(12-_$UV===-25){_$H7._$sQ="vJu9jawVnda";}else if(-72===-108+_$UV){_$W3=_$1i(8);}else{_$ap+="zyqKtjvbEwlVTp55YkOmITt8TV9mfzoKzj9_$rNwFx7N4qsNIKlhbakG1S6JutSEU$Uh7ryz$ZhmVddp2kO1SyuePs5npMpmn5avMbKr2UDlaj8alvHeqXXceHCXpENqa0cE7ioY1ld_4cU4aAmf9B$EwGUbNQoUKuGgNj3bvBXAo2nG0leGixksE0yFnzkZSYIIwAnaXMY6YFY3T1berBBn";}}else if(2769<71*_$UV&&117+_$UV<161){if(69===_$UV+27){_$ap+="fvzqDCxdPImqSamwEW0Xj7gf6dvJREHhEAahCiYwcfqynY5xlr1vgJR5k6RnMJC9HTLjJhCUtaC$rekdUaZSttVywWlfHQRqX_$jdgcCcN2hI7TOVPfLXF6Z11co6wEsVQFttnRCMnvCzufjQSsig90G$mcctvzt8O8jSsuJcHGhAl77pdCgS4NMQX";}else if(72-_$UV===31){_$ap=_$ap[_$Yy[36]](RegExp(_$Yy[24],_$Yy[23]),"");}else if(-41===-81+_$UV){_$po=_$ps[_$Yy[6]](_$MT,_$t1)[_$Yy[55]](_$qH[_$Yy[22]](_$Ge[7]));}else{return 2;}}else{if(100===_$UV+54){var _$ps=_$WV[_$Yy[0]];}else if(122-_$UV===77){_$H7._$Jt="Y2gT6HFPg_4DVu9DLNnX7L";}else if(41===-3+_$UV){_$Gf=_$H7===undefined||_$H7==="";}else{var _$_U=_$O4();}}}else{if(137<90+_$UV&&_$UV+47<99){if(69===_$UV+19){_$H7._$mu="_$xF";}else if(108-_$UV===59){_$MT+=_$t1;}else if(-19===-67+_$UV){_$Gf=_$ap!==_$Yy[27];}else{if(_$1i(186)){_$nk=_$1i(155);}}}else if(_$UV+77>128&&6216>111*_$UV){if(176===_$UV+122){_$H7._$wh="_$$K";}else if(116-_$UV===63){_$1i(124,_$nk);}else if(-51===-103+_$UV){var _$ap='';}else{_$1i(75,_$0C);}}else if(4785<87*_$UV&&97+_$UV<157){if(91===_$UV+33){for(_$t1=0;_$t1<_$xe.length;_$t1++){_$W3=_$xe[_$t1];for(_$_$=0;_$_$<_$W3.length;_$_$++){_$W3[_$_$]^=_$nk[Math.abs(_$_$)%16];}}return;}else if(115-_$UV===58){return 4;}else if(-1===-57+_$UV){var _$nk=_$O4();}else{var _$MT=0;}}else{if(165===_$UV+103){_$1i(28);}else if(76-_$UV===15){for(_$ap=0,_$W3=0;_$W3<_$_W;_$W3+=_$Ge[18]){_$hP[_$ap++ ]=_$nk+_$H7[_$Yy[6]](_$W3,_$Ge[18]);}}else if(-62===-122+_$UV){if(_$1i(159)){_$nk=_$1i(191);}}else{_$H7._$xA="_$nk";}}}}else{if(140<77+_$UV&&_$UV+116<196){if(75<12+_$UV&&_$UV+73<141){if(185===_$UV+119){var _$IA=_$WV._$gx;}else if(105-_$UV===40){_$H7._$h2="_$D3";}else if(52===-12+_$UV){_$W3=_$13[_$Yy[9]];}else{var _$_$=_$O4();}}else if(_$UV+106>173&&8064>112*_$UV){if(121===_$UV+51){_$4B(0);}else if(86-_$UV===17){_$H7._$h0="_$xI";}else if(-14===-82+_$UV){return 7;}else{_$H7._$Rj="_$F8";}}else if(2343<33*_$UV&&32+_$UV<108){if(156===_$UV+82){var _$Im=_$O4();}else if(92-_$UV===19){_$H7[_$1i(154,_$1i(123))]=_$1i(186);}else if(-7===-79+_$UV){_$H7._$tf=_$oE;}else{_$ap+="qg$K694w$0oCVgDU9ZRwJjxIwPmxD3fQvu7dr_bHCKTFc4wBVEIjdxboxAQhcGkJbGN9yL6teTKjv0t$9qPOfb0SxzVqeZqQmUf5i28_KVRrSbzZnlVSnQKxcUEakiIzzxJrya2ApiPGDgKU3FN0nuFakgnEKozCSoe4rpQqFsD88CDyRo2lOI0YSzk";}}else{if(191===_$UV+113){_$ap+="Jqh00WB$PQvMgMyhQULaG2$qy$I$gxaMVAig1CF8whJac20IqbXyyYvt_iUjnXi$XIo9iLPyjE46K9qMxpr$9cizw6Xe6gSKUrgHtfViQLTWTgqpl3rj1ZUPxF_lMg4LAyvRmuMzYVL9iSE9Jt0e2F0khNbEMpCGB9mAlsGaCtsQe0EvbXq1oJWFBR";}else if(9-_$UV===-68){_$H7._$l3="_$c4";}else if(-42===-118+_$UV){_$s$+=84;}else{var _$W3=_$1i(8);}}}else if(_$UV+125>204&&4608>48*_$UV){if(126<47+_$UV&&_$UV+26<110){if(96===_$UV+14){var _$ap=_$13[_$Yy[9]][_$Yy[44]]();}else if(68-_$UV===-13){_$ap=_$13[_$Yy[15]](_$H7);}else if(-17===-97+_$UV){return 1;}else{var _$ap,_$W3,_$_W=_$H7.length,_$hP=new _$ZL(_$_W/_$Ge[18]),_$nk='_$';}}else if(_$UV+1>84&&3784>43*_$UV){if(152===_$UV+66){_$ap+="4PniMoMsIKdPjZ18g9ARvdVs5ckMxq42L641hF4RBDBUUIODzI38yIJTML4fwEFgKUf61TY7AvqY42eSqDetRdbNt58F$8BH5yZ6OInfBxRPfLJPXUZ4kLD1Peq8vhQPDwxTq_SGFvdX4U3AQRQTr1zjqcwrb$2eaS92DzTJIn1UOYcHqxTjhytRL";}else if(43-_$UV===-42){var _$ap;}else if(65===-19+_$UV){return 1;}else{_$s$+=2;}}else if(8700<100*_$UV&&6+_$UV<98){if(167===_$UV+77){_$H7[_$1i(154,_$1i(156))]=_$1i(192);}else if(33-_$UV===-56){_$H7._$i$=17;}else if(62===-26+_$UV){return _$hP;}else{_$H7._$hN="RfrQ2lpI8Ea";}}else{if(97===_$UV+3){return 10;}else if(63-_$UV===-30){return 8;}else if(6===-86+_$UV){_$ap=_$W3[_$Yy[19]](_$13,_$H7);}else{_$ap+="x9DoYE03yTA6a7Ag6GFjWUiBZfwkDijmrFaCC6$tx1MZo_eKraAxR$5ibm2Ryk_OJ6Wcb3rQpJT$KkMIjuK$9IgGMLlt2SG$ysq917EDCcAqLsdoojj_6RHpkHe18GxGl$VpeyL8mrzn87fy6Y2Iw$5y$GQO5QFdtxNuS8YMHK5IMwqd4ihl6MFe";}}}else if(2660<28*_$UV&&87+_$UV<199){if(209<114+_$UV&&_$UV+107<207){if(114===_$UV+16){return 9;}else if(34-_$UV===-63){_$H7._$G2=189;}else if(7===-89+_$UV){if( !_$Gf)_$s$+=1;}else{return 15;}}else if(_$UV+27>126&&2184>21*_$UV){if(127===_$UV+25){var _$hP=_$ps.length;}else if(40-_$UV===-61){_$H7._$bE="_$hZ";}else if(13===-87+_$UV){var _$t1=_$O4();}else{_$Gf=_$Im>0;}}else if(3914<38*_$UV&&86+_$UV<194){if(198===_$UV+92){_$H7[10]=_$1i(145);}else if(58-_$UV===-47){_$H7._$Uy="_$CK";}else if(39===-65+_$UV){for(_$px=0;_$px<_$Im;_$px++ ){_$f6.push(_$Yy[2]);}}else{var _$0C=_$f6.join('');}}else{if(224===_$UV+114){_$s$+=-84;}else if(123-_$UV===14){_$H7._$y$="_$YV";}else if(45===-63+_$UV){_$H7[0]=_$1i(135);}else{_$H7._$iS="55SV392Xa_G";}}}else{if(184<73+_$UV&&_$UV+86<202){if(143===_$UV+29){_$H7._$aM=1;}else if(50-_$UV===-63){_$Gf=_$WV[_$Yy[0]];}else if(70===-42+_$UV){var _$_W=_$1i(68);}else{_$Gf=_$13[_$Yy[15]];}}else if(_$UV+78>193&&5160>43*_$UV){if(218===_$UV+100){_$H7._$0W="_$fQ";}else if(59-_$UV===-58){_$H7[15]=_$1i(192);}else if(20===-96+_$UV){_$H7._$kJ="_$nk";}else{_$nk=_$1i(135);}}else if(12257<103*_$UV&&35+_$UV<159){if(226===_$UV+104){return _$ap;}else if(91-_$UV===-30){_$H7._$bo="_$qI";}else if(76===-44+_$UV){_$ap+="qmehv0hO3nM2nPED$zAc6bjHNRVb9hjld9eH0XPfOB7BSM48UepEc$S7XSPHnp2Pte_TB$gQ7RxqGeV1gDHqLuYwEwdaZLVukMiAJKafUoLYsUS1TnCpzgkuAoQYXxkh$q8kkWAk0ptCJLOnNo1$3w3mtqhbSCaxhRp8xkeax4QLt$f__gjruOjups";}else{_$H7._$sE="_$Ij";}}else{if(229===_$UV+105){return 12;}else if(16-_$UV===-109){return;}else{var _$1o=_$1i(8);}}}}}function _$4B(_$_W,_$hq,_$uo){function _$7s(){var _$px=[0];Array.prototype.push.apply(_$px,arguments);return _$js.apply(this,_$px);}var _$Z5,_$NW,_$9M,_$Zk,_$oe,_$PV,_$rG,_$tY,_$rI,_$Rj,_$Im,_$hP,_$1o,_$5j,_$47,_$t4;var _$hL,_$nk,_$f6=_$_W,_$W3=_$xe[2];while(1){_$nk=_$W3[_$f6++];if(119+_$nk>134&&116>84+_$nk){if(44+_$nk>59&&31>11+_$nk){if(_$nk+39===56){var _$Im=_$hP>1?_$ns[_$Yy[48]][_$hP-_$Ge[18]].src:_$mD;}else if(102===_$nk+86){_$t4[_$Yy[10]]('GET',_$Im,false);}else if(50-_$nk===32){_$t4[_$Yy[38]]=_$7s;}else{var _$Im=_$O4();}}else if(39<20+_$nk&&_$nk+1<25){if(_$nk+46===67){var _$hP=_$4B(9);}else if(77===_$nk+57){var _$9M=_$O4();}else if(22-_$nk===0){var _$NW=_$O4();}else{_$js(7,_$uo);}}else if(_$nk+119>142&&644>23*_$nk){if(_$nk+93===118){return _$Im;}else if(100===_$nk+76){_$f6+=-28;}else if(42-_$nk===16){var _$hP=_$O4();}else{var _$Im=new _$ZL(_$hP);}}else{if(_$nk+63===92){var _$oe=_$O4();}else if(129===_$nk+101){var _$47=_$4B(9);}else if(117-_$nk===87){var _$PV=_$O4();}else{return;}}}else if(_$nk+45<61){if(126>122+_$nk){if(_$nk+35===36){var _$t4=_$O4();}else if(40===_$nk+40){var _$5j=_$4B(9);}else if(12-_$nk===10){var _$Z5=_$4B(9);}else{for(_$1o=0;_$1o<_$hP;_$1o++ ){_$Im[_$1o]=_$O4();}}}else if(59<56+_$nk&&_$nk+28<36){if(_$nk+104===109){_$t4=_$13[_$Yy[40]]?new _$13[_$Yy[40]](_$Yy[51]):new _$13[_$Yy[32]]();}else if(17===_$nk+13){_$t4[_$Yy[54]]();}else if(53-_$nk===47){if( !_$hL)_$f6+=4;}else{for(_$1o=0;_$1o<_$Im;_$1o++ ){_$rG[_$1o]=_$4B(9);}}}else if(_$nk+105>112&&1440>120*_$nk){if(_$nk+53===62){var _$tY=_$O4();}else if(119===_$nk+111){var _$rG=[];}else if(93-_$nk===83){var _$hP=_$ns[_$Yy[48]].length;}else{_$hL=_$Im;}}else{if(_$nk+112===125){var _$Rj=_$O4();}else if(26===_$nk+14){var _$Zk=_$O4();}else if(93-_$nk===79){_$f6+=28;}else{_$L7[_$hq]=_$hP;}}}else{if(_$nk+104===137){}else{var _$rI=_$4B(9);}}}function _$js(_$1o,_$3Y){var _$Im,_$hP,_$Kv,_$Zm;var _$f6,_$px,_$_W=_$1o,_$nk=_$xe[3];while(1){_$px=_$nk[_$_W++];if(1240<40*_$px&&94+_$px<142){if(2301<59*_$px&&86+_$px<130){if(-54===-94+_$px){_$3Y.push(_$IA[_$Z5[0]]);}else if(_$px+112===153){_$f6=_$WV[_$Yy[0]];}else if(87===_$px+45){_$3Y.push(_$Yy[43]);}else{for(_$hP=1;_$hP<_$Z5.length;_$hP++ ){_$3Y.push(_$Yy[4]);_$3Y.push(_$IA[_$Z5[_$hP]]);}}}else if(75+_$px>110&&130>90+_$px){if(2===-34+_$px){_$3Y.push(_$Yy[45]);}else if(_$px+94===131){_$3Y.push(_$IA[_$t4]);}else if(72===_$px+34){_$3Y.push(_$Yy[49]);}else{return;}}else if(123<92+_$px&&_$px+76<112){if(6===-26+_$px){_$3Y.push(_$Yy[2]);}else if(_$px+4===37){_$f6=_$Z5.length;}else if(88===_$px+54){_$3Y.push(_$IA[_$Zk]);}else{_$3Y.push(_$IA[_$Rj]);}}else{if(-81===-125+_$px){for(_$hP=0;_$hP<_$47.length;_$hP+=_$Ge[18]){if(_$Ge[14]<Math[_$Yy[3]]()){_$Im.push([_$47[_$hP],_$47[_$hP+1]]);}else{_$Im[_$Yy[12]]([_$47[_$hP],_$47[_$hP+1]]);}}}else if(_$px+128===173){_$3Y.push("];");}else if(83===_$px+37){_$3Y.push(_$Yy[47]);}else{if( !_$f6)_$_W+=10;}}}else if(28+_$px>43&&85>53+_$px){if(2277<99*_$px&&27+_$px<55){if(-2===-26+_$px){if( !_$f6)_$_W+=1;}else if(_$px+84===109){for(_$hP=0;_$hP<_$5j.length;_$hP++ ){_$3Y.push(_$Yy[4]);_$3Y.push(_$IA[_$5j[_$hP]]);}}else if(138===_$px+112){_$3Y.push(_$hq);}else{_$3Y.push("=0,");}}else if(112+_$px>131&&126>102+_$px){if(-63===-83+_$px){_$f6=_$t4[_$Yy[34]]==_$Ge[8];}else if(_$px+17===38){_$1i(75,_$t4[_$Yy[41]]);}else if(140===_$px+118){_$3Y.push(_$Yy[46]);}else{_$da(10,0,_$rG.length);}}else if(103<88+_$px&&_$px+50<70){if(-2===-18+_$px){_$3Y.push(_$IA[_$oe]);}else if(_$px+90===107){_$3Y.push(_$IA[_$_U]);}else if(73===_$px+55){_$f6=_$5j.length;}else{_$_W+=1;}}else{if(-21===-49+_$px){_$3Y.push(_$Yy[14]);}else if(_$px+3===32){_$3Y.push(_$IA[_$0m]);}else if(154===_$px+124){_$3Y.push(_$IA[_$9M]);}else{for(_$hP=0;_$hP<_$Im.length;_$hP++ ){_$da(0,_$Im[_$hP][0],_$Im[_$hP][1],_$3Y);}}}}else if(_$px+54<70){if(469<67*_$px&&93+_$px<105){if(-118===-126+_$px){_$f6=_$hq==0;}else if(_$px+62===71){_$3Y.push(_$Yy[26]);}else if(74===_$px+64){_$3Y.push(_$Yy[4]);}else{var _$hP,_$Kv=_$Ge[8];}}else if(104+_$px>107&&36>28+_$px){if(-106===-110+_$px){_$3Y.push(_$Yy[25]);}else if(_$px+90===95){_$3Y.push(_$IA[_$PV]);}else if(97===_$px+91){_$_W+=8;}else{if( !_$f6)_$_W+=8;}}else if(_$px+59<63){if(-97===-97+_$px){_$3Y.push(_$Yy[7]);}else if(_$px+82===83){var _$Im=[];}else if(71===_$px+69){_$1i(28);}else{if( !_$f6)_$_W+=4;}}else{if(-56===-68+_$px){_$Zm=_$rG.length;}else if(_$px+47===60){_$_W+=2;}else if(122===_$px+108){_$f6=_$rG.length;}else{_$3Y.push(_$Yy[13]);}}}else{if(3===-45+_$px){_$da(45);}else if(_$px+50===99){var _$Zm=0;}else if(104===_$px+54){_$3Y.push(_$Yy[5]);}else{_$3Y.push(_$Yy[53]);}}}function _$da(_$_$,_$NN,_$qB,_$UA){var _$nk,_$W3,_$t1,_$Im,_$hP,_$1o,_$_W,_$f6,_$hL,_$px;var _$ap,_$s$,_$0C=_$_$,_$Gf=_$xe[4];while(1){_$s$=_$Gf[_$0C++];if(_$s$+117>132&&3392>106*_$s$){if(_$s$+26>41&&360>18*_$s$){if(5-_$s$===-14){_$da(52,_$hP[_$t1]);}else if(-58===-75+_$s$){_$0C+=-51;}else if(_$s$+10===28){_$3Y.push(_$Yy[2]);}else{_$nk=_$_W%_$Kv;}}else if(1292<68*_$s$&&37+_$s$<61){if(7-_$s$===-16){_$Im=0;}else if(-48===-69+_$s$){_$3Y.push(_$Yy[11]);}else if(_$s$+10===32){_$ap=_$px==0;}else{_$f6=_$Yy[21];}}else if(41+_$s$>64&&77>49+_$s$){if(93-_$s$===66){_$t1=_$_W%_$px;}else if(-38===-63+_$s$){_$hP=[];}else if(_$s$+84===110){_$3Y.push(_$po[_$t1[_$f6]]);}else{for(_$t1=0;_$t1<_$px;_$t1++ ){_$hP[_$t1]=_$NN+_$t1;}}}else{if(23-_$s$===-8){_$_W=Math[_$Yy[16]]((Math[_$Yy[3]]()*_$Ge[9])+1);}else if(-30===-59+_$s$){_$da(52,_$NN);}else if(_$s$+55===85){for(_$f6=0;_$f6<_$t1;_$f6+=_$Ge[18]){_$3Y.push(_$po[_$rI[_$f6]]);_$3Y.push(_$IA[_$rI[_$f6+1]]);}}else{_$ap=_$px==1;}}}else if(119+_$s$<135){if(324>81*_$s$){if(100-_$s$===97){_$ap=_$px<=_$Kv;}else if(-115===-116+_$s$){_$3Y.push(_$po[_$rI[_$t1]]);}else if(_$s$+89===91){return;}else{_$f6-=_$f6%_$Ge[18];}}else if(78<26*_$s$&&123+_$s$<131){if(29-_$s$===22){var _$t1=_$rI.length;}else if(-86===-91+_$s$){if( !_$ap)_$0C+=15;}else if(_$s$+95===101){_$UA.push([_$Yy[45],_$IA[_$NN],_$Yy[33],_$IA[_$NW],"=[",_$qB,_$Yy[35],_$IA[_$NW],_$Yy[42],_$IA[_$tY],_$Yy[31],_$IA[_$NW],");}"].join(''));}else{for(;_$NN+_$Im<_$qB;_$NN+=_$Im){_$3Y.push(_$f6);_$3Y.push(_$IA[_$oe]);_$3Y.push(_$Yy[52]);_$3Y.push(_$NN+_$Im);_$3Y.push(_$Yy[7]);_$da(10,_$NN,_$NN+_$Im);_$f6=_$Yy[8];}}}else if(6+_$s$>13&&55>43+_$s$){if(92-_$s$===81){_$0C+=8;}else if(-13===-22+_$s$){_$hL=_$hP[0];}else if(_$s$+117===127){_$hP[0]=_$hP[_$t1];}else{_$da(10,_$NN,_$qB);}}else{if(102-_$s$===87){if( !_$ap)_$0C+=1;}else if(-78===-91+_$s$){}else if(_$s$+81===95){var _$t1,_$f6,_$Im,_$px=_$qB-_$NN;}else{_$0C+=29;}}}else{if(_$s$+96>127&&576>16*_$s$){if(91-_$s$===56){_$ap=_$t1.length!=_$f6;}else if(14===-19+_$s$){for(_$Im=0;_$Im<_$f6;_$Im+=_$Ge[18]){_$3Y.push(_$po[_$t1[_$Im]]);_$3Y.push(_$IA[_$t1[_$Im+1]]);}}else if(_$s$+16===50){if( !_$ap)_$0C+=2;}else{for(_$t1=0;_$t1<_$px-1;_$t1++ ){if(_$t1==_$nk){_$1o=_$qB;if(_$NN>1&&_$_W%_$Ge[18]==0){_$1o=_$NN-1;}_$3Y.push(_$f6);_$3Y.push(_$IA[_$oe]);_$3Y.push(_$W3);_$3Y.push(_$1o);_$3Y.push(_$Yy[7]);_$da(52,_$_W%_$Zm);_$f6=_$Yy[8];}_$3Y.push(_$f6);_$3Y.push(_$IA[_$oe]);_$3Y.push(_$W3);_$3Y.push(_$hP[_$t1]);_$3Y.push(_$Yy[7]);_$da(52,_$hP[_$t1]);_$f6=_$Yy[8];}}}else if(3360<96*_$s$&&12+_$s$<52){if(98-_$s$===59){_$t1-=_$t1%_$Ge[18];}else if(-28===-65+_$s$){_$0C+=-50;}else if(_$s$+50===88){var _$t1=_$rG[_$NN];}else{_$hP[_$t1]=_$hL;}}else if(39+_$s$>78&&73>29+_$s$){if(38-_$s$===-5){_$W3="===";}else if(-83===-124+_$s$){_$ap=_$rI.length!=_$t1;}else if(_$s$+26===68){_$0C+=25;}else{for(_$t1=1;_$t1<_$Ge[0];_$t1++ ){if(_$px<=_$sU[_$t1]){_$Im=_$sU[_$t1-1];break;}}}}else{var _$f6=_$t1.length;}}}}}}}})()







function get_cookie(){
    return document.cookie
}

console.log(get_cookie())