fetch('//google.com')
    .then(function () {
        fetch('//yandex.ru')
    })
    .then(function () {
        fetch('//facebook.ru')
    })
    .then(() => {
        fetch('//twitter.ru')
    });


fetch('//google.com')
    .then(function () {
        throw new Error('some error');
    })
    .then(function () {
        fetch('//facebook.ru')
    })
    .then(() => {
        fetch('//twitter.ru')
    }).catch(() => {
        console.error('error occured');
    }).then(() => {
        fetch('//yandex.ru');
    });