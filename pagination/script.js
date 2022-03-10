var current_page = 1;
var records_per_page = 10;
var obj = [
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Voucher Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Voucher Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Threshold Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Time based Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Threshold Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Time based Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Credit Note',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Credit Note',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Campaign Benifit',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'Campaign Benifit',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'one time Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'one time Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    },
    {
        date_and_time: '14.12.2021|07:20 AM',
        description: 'ATM Topup',
        charges: '3.35&euro;',
    }

];
function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}
function nextPage() {
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
function changePage(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";
        
        for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
            listing_table.innerHTML += `<tr>
            <td class="first bold">${obj[i].date_and_time}</td>
            <td class="second bold">${obj[i].description}</td>
            <td class="third">${obj[i].charges}</td>`;
        }
        

    page_span.innerHTML = page + "/" + numPages();
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }
    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
function numPages() {
    return Math.ceil(obj.length / records_per_page);
}
window.onload = function () {
    changePage(1);
};
