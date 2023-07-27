package kr.co.jhta.pony.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import kr.co.jhta.pony.dto.CarRegisterDTO;

@Mapper
@Repository
public interface CarRegisterDAO {

	public void CarInsert(CarRegisterDTO regCarDTO, int no);

	public void ClientInsert(CarRegisterDTO regCarDTO);

	public int ClientSelectNo(CarRegisterDTO regCarDTO);

	public List<CarRegisterDTO> SearchSelect(String clientVin, String clientCarNumber, String memberName);

	public CarRegisterDTO regRegistrationSelect(String clientVin);

	public void regAndcorrInsertAndUpdate(CarRegisterDTO regCarDTO);


}
