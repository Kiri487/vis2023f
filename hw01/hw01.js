function generateStudentClass(){
    let studentClass = ["資工系", "資工所", "電資AI", "電資資安", "創新AI"];
    return studentClass[Math.floor(Math.random() * studentClass.length)];
}

function generateStudentId(){
    let studentIdPart1 = ["111", "112"];
    let studentIdPart2 = ["590", "598", "C52", "C53", "C71"];
    let studentId = "";
    studentId += studentIdPart1[Math.floor(Math.random() * studentIdPart1.length)];
    studentId += studentIdPart2[Math.floor(Math.random() * studentIdPart2.length)];
    studentId = studentId + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

    return studentId;
}

function generateStudentName(){
    let studentLastName = ["王", "李", "張", "劉", "陳", "楊", "黃", "趙", "吳", "周", "徐", "孫", "馬", "朱", "胡", "郭", "何", "高", "林", "鄭", "謝", "羅", "梁", "宋", "唐", "許", "韓", "馮", "鄧", "曹", "彭", "曾", "蕭", "田", "董", "袁", "潘", "於", "蔣", "蔡", "余", "杜", "葉", "程", "蘇", "魏", "呂", "丁", "任", "沈", "姚", "盧", "姜", "崔", "鍾", "譚", "陸", "汪", "范", "金", "石", "廖", "賈", "夏", "韋", "付", "方", "白", "鄒", "孟", "熊", "秦", "邱", "江", "尹", "薛", "閆", "段", "雷", "侯", "龍", "史", "陶", "黎", "賀", "顧", "毛", "郝", "龔", "邵", "萬", "錢", "嚴", "覃", "武", "戴", "莫", "孔", "向", "湯"]
    let studentName = "";
    studentName += studentLastName[Math.floor(Math.random() * studentLastName.length)];
    studentName = studentName + String.fromCharCode(0x4E00 + Math.floor(Math.random() * (0x9FFF - 0x4E00))) + String.fromCharCode(0x4E00 + Math.floor(Math.random() * (0x9FFF - 0x4E00)));
    
    return studentName;
}

function generateStudentGitHubId(){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let studentGitHubId = "";
    for (let i = 0; i < 10; i++){
        studentGitHubId += characters[Math.floor(Math.random() * characters.length)];
    }

    return studentGitHubId;
}

function generateScore(){
    return Math.floor(Math.random() * 11);
}

function generateStudentArray(){
    let tableTitle = ["序號", "班級", "學號", "姓名", "GitHub", "作業一", "作業二", "作業三", "作業四", "作業五", "作業六", "作業七", "作業八", "作業九", "作業十"]; 
    let studentArray = new Array(121);
    studentArray[0] = tableTitle;
    for (let i = 1; i < 121; i++){
        studentArray[i] = new Array(15);
        studentArray[i][0] = i;
        studentArray[i][1] = generateStudentClass();
        studentArray[i][2] = generateStudentId();
        studentArray[i][3] = generateStudentName();
        studentArray[i][4] = generateStudentGitHubId();
        for (let j = 5; j < 15; j++){
            studentArray[i][j] = generateScore();
        }
    }

    return studentArray;
}

function generateStudentTable(){
    let studentArray = generateStudentArray();
    studentTable = "";
    for (let i = 0; i < 121; i++){
        studentTable += "<tr>";
        for (let j = 0; j < 15; j++){
            studentTable += "<td>";
            studentTable += studentArray[i][j];
            studentTable += "</td>";
        }
        studentTable += "</tr>";
    }
    return studentTable;
}

function downloadCSV(csv, filename) {
    let csvFile;
    let downloadLink;

    csv = '\uFEFF' + csv;
    csvFile = new Blob([csv], {type: "text/csv"});

    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function tableToCSV() {
    let csv = [];
    let rows = document.querySelectorAll("table tr");
    
    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (let j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        csv.push(row.join(","));        
    }
    downloadCSV(csv.join("\n"), "studentTable");
}