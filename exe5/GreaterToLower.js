function GreaterToLower ([_, v1], [__, v2]) {
    let comparison = 0;
    if (v1 < v2) comparison = 1;
    else if (v1 > v2) comparison = -1;
    return comparison;
}
module.exports = GreaterToLower;
