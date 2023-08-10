package kr.co.jhta.pony.dao;

import java.time.LocalDate;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import kr.co.jhta.pony.dto.CarRegisterDTO;
import kr.co.jhta.pony.dto.HistroyDTO;
import kr.co.jhta.pony.dto.MechanicRegisterDTO;
import lombok.extern.slf4j.Slf4j;

@Mapper
@Repository
public interface CarRegisterDAO {

	public void insertCar(CarRegisterDTO regCarDTO, int no);

	public void insertClient(CarRegisterDTO regCarDTO);

	public int selectClientNo(CarRegisterDTO regCarDTO);

	public List<CarRegisterDTO> selectSearch(String clientVin, String clientCarNumber, String memberName);

//	public List<CarRegisterDTO> regRegistrationSelect(String clientVin);
	public CarRegisterDTO selectRegRegistration(String clientVin);

	public void insertRegAndcorr(CarRegisterDTO regCarDTO);
	
	public void insertRegAndcorrRemain(CarRegisterDTO regCarDTO);

	public CarRegisterDTO selectResNum(int registrationRN, LocalDate registrationDate);

	public List<MechanicRegisterDTO> selectResMechanic(Integer mechanicNo, String mechanicName, int word);

	public MechanicRegisterDTO selectRegistrationChiceMechanicInput(int mechanicNo);
	
	public CarRegisterDTO selectRegistrationTodayCases();

	public void updateRegAndEditOne(CarRegisterDTO carRegisterDTO);
	public void updateRegAndEditTwo(CarRegisterDTO carRegisterDTO);

	public int selectRegAndcorrNumber();

	public CarRegisterDTO selectReg(int registrationRN,LocalDate registrationDate);



}
