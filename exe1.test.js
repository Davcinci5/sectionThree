let loadingBar = require('./exe1');

test('return [----------------=========------------------------] after 25 cycles',async()=>{
    let bar = '[----------------=========------------------------]';
    let data = await loadingBar(25);
    expect(data).toBe(bar);
});

test('return [----------------------------------=========------] after 190 cycles',async()=>{
    let bar = '[----------------------------------=========------]';
    let data = await loadingBar(190);
    expect(data).toBe(bar);
});

test('return [=======------------------------------------------] after 203 cycles',async()=>{
    let bar = '[=======------------------------------------------]';
    let data = await loadingBar(203);
    expect(data).toBe(bar);
});

test('return [------=========----------------------------------] after 211 cycles',async()=>{
    let bar = '[------=========----------------------------------]';
    let data = await loadingBar(211);
    expect(data).toBe(bar);
});

test('return [-------------------------------------------------] after 147 cycles',async()=>{
    let bar = '[-------------------------------------------------]';
    let data = await loadingBar(147);
    expect(data).toBe(bar);
});

