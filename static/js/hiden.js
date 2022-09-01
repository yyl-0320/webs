        var integer;
        var integer1;
        document.onkeydown = function (event) {
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 38) { // 上
                integer = 2;
                integer1 = 1;
            }
            if (e && e.keyCode == 38 && integer == 2) { // 上
                integer1 = integer1 + 1;
            }
            if (e && e.keyCode == 40 && integer1 == 2) { // 下
                integer1 = integer1 + 1;
            }
            if (e && e.keyCode == 40 && integer1 == 3) { // 下
                integer1 = integer1 + 1;
            }
            if (e && e.keyCode == 37 && integer1 == 4) { // 左
                integer1 = integer1 + 1;
            }
            if (e && e.keyCode == 39 && integer1 == 5) { // 右
                integer1 = integer1 + 1;
            }
            if (e && e.keyCode == 37 && integer1 == 6) { // 左
                integer1 = integer1 + 1;
            }
            if (e && e.keyCode == 39 && integer1 == 7) { // 右
                //window.open("hiden.html");
                document.getElementById("four").style.display="block";
                integer = 0;
                integer1 = 0;
            }
            if (e && e.keyCode != 38 && e && e.keyCode != 40 && e && e.keyCode != 37 && e && e.keyCode != 39)
             {
                integer = 9;
                integer1 = 9;
            }
        };