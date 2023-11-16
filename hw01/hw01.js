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
    let studentLastName = ["王", "李", "張", "劉", "陳", "楊", "黃", "趙", "吳", "周", "徐", "孫", "馬", "朱", "胡", "郭", "何", "高", "林", "鄭", "謝", "羅", "梁", "宋", "唐", "許", "韓", "馮", "鄧", "曹", "彭", "曾", "蕭", "田", "董", "袁", "潘", "於", "蔣", "蔡", "余", "杜", "葉", "程", "蘇", "魏", "呂", "丁", "任", "沈", "姚", "盧", "姜", "崔", "鍾", "譚", "陸", "汪", "范", "金", "石", "廖", "賈", "夏", "韋", "付", "方", "白", "鄒", "孟", "熊", "秦", "邱", "江", "尹", "薛", "閆", "段", "雷", "侯", "龍", "史", "陶", "黎", "賀", "顧", "毛", "郝", "龔", "邵", "萬", "錢", "嚴", "覃", "武", "戴", "莫", "孔", "向", "湯"];
    let studentFirstName = ["怡", "文", "婷", "雅", "佳", "君", "志", "嘉", "俊", "家", "宏", "偉", "明", "慧", "欣", "宜", "惠", "彥", "如", "瑋", "宇", "豪", "芳", "建", "雯", "佩", "育", "柏", "凱", "智", "哲", "宗", "維", "銘", "傑", "淑", "玲", "冠", "穎", "玉", "翔", "瑜", "華", "廷", "孟", "政", "儀", "安", "仁", "郁", "涵", "子", "靜", "翰", "美", "國", "庭", "思", "軒", "珊", "賢", "珮", "瑩", "霖", "儒", "蓉", "正", "瑞", "鈞", "秀", "鴻", "倫", "伶", "盈", "琪", "萱", "威", "元", "佑", "信", "德", "立", "聖", "詩", "世", "婉", "潔", "昱", "鈺", "樺", "敏", "姿", "榮", "承", "慈", "曉", "奕", "芬", "書", "逸", "萍", "馨", "士", "真", "毅", "祥", "茹", "中", "筱", "琳", "菁", "弘", "良", "博", "娟", "慶", "芸", "勳", "依", "達", "心", "永", "恩", "韋", "成", "峰", "毓", "杰", "緯", "宛", "昌", "振", "璇", "麗", "于", "妤", "忠", "青", "誠", "裕", "龍", "均", "民", "淳", "貞", "旻", "容", "純", "平", "皓", "品", "耀", "昇", "寧", "勝", "憲", "浩", "靖", "啟", "吟", "英", "莉", "辰", "韻", "薇", "健", "綺", "蕙", "瑄", "仲", "秋", "秉", "群", "祐", "修", "亭", "珍", "揚", "昭", "琦", "任", "益", "源", "光", "詠", "玟", "景", "富", "駿", "柔", "泰", "閔", "羽", "輝", "堯", "雲", "琬", "峻", "蓁", "伊", "禎", "燕", "千", "易", "東", "巧", "鳳", "昀", "致", "培", "晴", "漢", "伯", "睿", "芝", "敬", "義", "亞", "方", "興", "翊", "清", "鈴", "筠", "玫", "一", "瓊", "隆", "丞", "倩", "麟", "晏", "岳", "湘", "崇", "帆", "臻", "強", "欽", "展", "沛", "雄", "尚", "雨", "晉", "名", "竹", "甫", "旭", "喬", "澤", "諭", "宣", "俐", "斌", "凡", "紹", "泓", "學", "筑", "甄", "舒", "坤", "謙", "梅", "若", "璋", "舜", "全", "琇", "遠", "奇", "俞", "芷", "映", "盛", "金", "虹", "懿", "蘭", "婕", "新", "碩", "乃", "彬", "仕", "媛", "融", "孝", "豐", "錦", "意", "嵐", "諺", "至", "彰", "淵", "天", "吉", "尹", "昕", "大", "云", "祺", "汝", "順", "瑾", "瀚", "松", "榕", "姵", "力", "又", "幸", "和", "齡", "昆", "男", "人", "憶", "之", "勇", "捷", "陽", "晨", "原", "以", "齊", "超", "為", "誼", "采", "雪", "朝", "鑫", "恆", "鵬", "菱", "兆", "長", "卉", "惟", "邦", "卿", "生", "楷", "竣", "香", "亮", "亦", "誌", "妍", "春", "程", "銓", "煒", "綸", "暐", "愷", "素", "其", "小", "瑛", "紋", "姍", "妮", "碧", "季", "福", "汶", "治", "鋒", "妙", "暉", "綾", "桂", "鼎", "勛", "晟", "叡", "禹", "星", "可", "聰", "寬", "煜", "洋", "億", "翎", "騰", "淇", "月", "鎮", "呈", "宥", "貴", "桓", "棋", "利", "茵", "茜", "凌", "懷", "羿", "寶", "妏", "岑", "岱", "麒", "瑤", "進", "璟", "屏", "嫻", "琮", "蘋", "友", "章", "侑", "念", "康", "蔚", "曜", "蓮", "亨", "林", "延", "森", "恬", "權", "上", "宸", "蓓", "琴", "函", "剛", "煌", "耿", "茂", "彤", "玄", "允", "瀅", "升", "勤", "劭", "少", "珈", "音", "介", "馥", "克", "南", "繼", "霆", "年", "傳", "錡", "昶", "苓", "曼", "葳", "渝", "蒨", "翠", "顯", "禮", "瑀", "百", "典", "善", "紀", "榆", "肇", "羚", "迪", "炳", "霈", "煥", "州", "有", "得", "賓", "皇", "道", "洲", "綱", "祖", "棠", "雁", "先", "紫", "霞", "重", "斐", "璿", "喻", "佐", "航", "錚"];
    let studentName = "";
    studentName += studentLastName[Math.floor(Math.random() * studentLastName.length)];
    studentName = studentName + studentFirstName[Math.floor(Math.random() * studentFirstName.length)] + studentFirstName[Math.floor(Math.random() * studentFirstName.length)];
    
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