$(document).ready(function() {
	// 페이지 스크롤 이동
	let offset = $(".top-title").offset();
	$('html').animate({ scrollTop: offset.top }, 1);

	function Comma(value) { //금액에 , 붙이는 함수
		return value.replace(/(\d+)/, function(number) {
			return parseInt(number).toLocaleString();
		});

	}
	// keyup 이벤트 추가
	$('#parts-find-text').keyup(function() {
		let item = []; // 자동완성 담을 변수
		let partsFindText = $(this).val(); // 현재 입력 필드의 값 가져오기
		if ($('#parts-find-text').val() != "") { // 입력 필드에 값일 있을 경우에만 자동완성 기능
			$('#parts-find-text').autocomplete({
				source: function(request, response) {
					$.ajax({
						url: "/model/searchParts2",
						data: { partName: partsFindText }, //partName에 담아서 서버로 보냄
						dataType: 'json',
						success: function(data) {
							if (data.length > 0) {
								for (let i = 0; i < data.length; i++) {//서버에서 받아온 데이터를 배열에 넣는다
									item.push({
										label: data[i], // 각 데이터를 label에 추가
									});
								}
							}
							response(item); // 자동완성 반환
						},
					});

				},
				select: function(event, ui) { // 항목을 선택하면 함수 실행
					performPartsFind(ui.item.label);
				},
				focus: function(event, ui) { // 항목에 포커스 될때 함수 실행
					return false;
				},
				minLength: 1, // 자동완성 실행되는 최초 글자 수
				delay: 100, // 입력 후 자동완성이 시작되기까지 시간
				close: function(event) {
				},

			});
		}

	});



	$("#parts-find-btn").on("click", function() {

		let partsFindText = document.getElementById("parts-find-text").value;
		document.getElementById("parts-find-text").value = "";
		console.log(partsFindText);
		if (partsFindText == "") {
			alert("찾으실 부품명을 입력해주세요");
		} else {
			performPartsFind(partsFindText);
		}
	});
	function performPartsFind(partsFindText) {
		$.ajax({
			url: "/model/searchParts",
			data: { partName: partsFindText }, // 입력값을 서버에 partName으로 전달
			success: function(response) {
				$("div.card-body").empty(); // 전달하면 입력필드 값 초기화
				for (let i = 0; i < response.length; i++) { // 전달받은 데이터를 div에 감싸서 생성
					let data = "<div class='searched-parts row'><div class='col-md-1'></div><div class='searched-col col-md-7 back'>"
						+ response[i].partName + " (차종:" + response[i].modelName + ")</div><div class='searched-col col-md-3 back'>"
						+ Comma(String(response[i].partPrice))
						+ "원</div> <div class='col-md-1'></div></div>";
					$("div.card-body").append(data); // 생성 된 데이터를 본문에 출력
				}
				// 페이지 스크롤 이동
				let offset = $(".searched-parts").offset();
				$('html').animate({ scrollTop: offset.top }, 1);
			},
			error: function(error) {
				console.log(error + "에러~");
			}
		});
	}

});












