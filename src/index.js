module.exports = function check(str, bracketsConfig) {
    // your solution
    let result = true;
    if(str.length > 0){
        var find = false;
        for(let i = 0; i < bracketsConfig.length; i++){
            let brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            let index = str.indexOf(brackets);
            if(index >= 0){
                find = true;
                str = str.substring(0, index) + str.substring(index + 2);
                result = check(str, bracketsConfig);
                break;
            }
        }
        if(!find){
            result = false;
        }
    }
    return result;
}