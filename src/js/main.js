let MafiaController = {
    lastPlayerIndex: 0,
    createNewPlayer: function () {
        MafiaController.lastPlayerIndex = MafiaController.lastPlayerIndex + 1;
        let playerIndex = MafiaController.lastPlayerIndex;
        let targetTable = document.getElementById("mainTablePlayers");
        let targerTr = targetTable.insertRow(targetTable.childElementCount);
        targerTr.id = "playerId" + playerIndex;
        targerTr.className = "player";
        let targerTdFirst = targerTr.insertCell(0);
        let targerTdSecond = targerTr.insertCell(1);
        let textField = document.createElement("INPUT");
        textField.setAttribute("type", "text");
        targerTdFirst.appendChild(textField);
        let btn = document.createElement("DIV");
        btn.setAttribute("class", "addBtn");
        btn.setAttribute("onclick", "MafiaController.deletePlayer(\"playerId" + playerIndex + "\")");
        btn.innerHTML = "del";
        targerTdSecond.appendChild(btn);
    },
    deletePlayer: function (index) {
        let elem = document.getElementById(index);
        elem.parentNode.removeChild(elem);
    },
    lastRoleIndex: 0,
    createNewRole: function () {
        MafiaController.lastRoleIndex = MafiaController.lastRoleIndex + 1;
        let roleIndex = MafiaController.lastRoleIndex;
        let targetTable = document.getElementById("mainTableRoles");
        let targerTr = targetTable.insertRow(targetTable.childElementCount);
        targerTr.id = "roleId" + roleIndex;
        targerTr.className = "role";
        let targerTdFirst = targerTr.insertCell(0);
        let targerTdSecond = targerTr.insertCell(1);
        let targerTdThird = targerTr.insertCell(2);
        let textField = document.createElement("INPUT");
        textField.setAttribute("type", "text");
        targerTdFirst.appendChild(textField);
        let numberField = document.createElement("INPUT");
        numberField.setAttribute("type", "text");
        targerTdSecond.appendChild(numberField);
        let btn = document.createElement("DIV");
        btn.setAttribute("class", "addBtn");
        btn.setAttribute("onclick", "MafiaController.deleteRole(\"roleId" + roleIndex + "\")");
        btn.innerHTML = "del";
        targerTdThird.appendChild(btn);
    },
    deleteRole: function (index) {
        let elem = document.getElementById(index);
        elem.parentNode.removeChild(elem);
    },
    scheduleRole: function () {
        let playersNames = [];
        let playersElements = document.getElementsByClassName("player");
        for (i = 0; i < playersElements.length; i++) {
            console.log(playersElements[i].children[0].children[0].value)
            playersNames.push(playersElements[i].children[0].children[0].value);
        }
        let playersRoles = [];
        let roleElements = document.getElementsByClassName("role");
        for (i = 0; i < roleElements.length; i++) {
            for (j = 0; j < roleElements[i].children[1].children[0].value; j++) {
                playersRoles.push(roleElements[i].children[0].children[0].value);
            }
        }
        let playerRolePair = [];
        for (i = 0; i < playersNames.length; i++) {
            if (playersRoles.length < 1) {
                playerRolePair.push({ player: playersNames[i], role: "Не залишилось жодної ролі", })
            } else {
                let roleIndex = Math.floor(Math.random() * Math.floor(playersRoles.length));
                let role = playersRoles[roleIndex];
                playerRolePair.push({ player: playersNames[i], role: role, })
                playersRoles.splice(roleIndex, 1);
            }

        }
        MafiaController.resultOutput(playerRolePair);

    },
    resultOutput: function (playerRolePair) {
        let resultField = document.getElementById("resultField");
        resultField.innerHTML = '';
        for (i = 0; i < playerRolePair.length; i++) {
            let btn = document.createElement("DIV");
            btn.innerHTML = playerRolePair[i].player + " -> " +
                playerRolePair[i].role;
            resultField.appendChild(btn);
        }
    }
};