function CardPayment(){
    const navigate=useNavigate();
    const [cartItems, setCartItems]=useState([]);

    useEffect(()=>{
        const fetchCartItems = async()=> {
            try {
                const response = await axios.get('http://3.36.175.224:8080/cart-items');
                if (response.status ===200){
                    setCartItems(response.data);
                }
            }catch(error){
             console.log('장바구니 상품 에러');
            }
        };
        fetchCartItems();
    },[]);

    const getTotalAmout=()=> {
        return cartItems.reduce((total, item)=> total+item.price,0);
    };



    function onClickPayment(){
        //1.가맹점 식별
        const {IMP}=window;
        IMP.init('imp08177703');

        //2. 결제 데이터 정의
        const data = {
            pg: 'html5_inicis',                           // PG사
            pay_method: 'card',                           // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
            // amount : getTotalAmout().toString(),                                 // 결제금액
            amount : '49000',
            name: '아임포트 결제 테스트',                  // 주문명
            buyer_name: '홍길동',                           // 구매자 이름
            buyer_tel: '01012341234',                     // 구매자 전화번호
            buyer_email: 'example@example',               // 구매자 이메일
            buyer_addr: '신사동 661-16',                    // 구매자 주소
            buyer_postcode: '06018',                      // 구매자 우편번호
          };
          //4. 결제 창 호출
          IMP.request_pay(data,callback);
    }
    //3, 콜백 함수 
    function callback(response){
        const {success, imp_uid, merchant_uid,pay_method, paid_amount,status,error_msg}=response;
        if (success){
            alert('결제 성공');
        }else{
            alert(`결제 실패 : ${error_msg}`);
        }
    }

}

export default CardPayment;
